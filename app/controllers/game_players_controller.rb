require 'open-uri'

class GamePlayersController < ApplicationController
  before_action :set_game_player, only: [:show, :update]

  def index
    @game_players = GamePlayer.includes(:game, :player).where(is_accused: true).order("created_at DESC")
  end

  # GET /game_players/1
  # GET /game_players/1.json
  def show
  end

  def create
    file = params[:file].tempfile
    client = Sc2replaystats::Client.new(
        Rails.application.credentials.config[:sc2replaystats_auth],
        Rails.application.credentials.config[:sc2replaystats_hash]
    )
    replay = Sc2replaystats::Replay.new(client)
    resp = replay.upload(file)
    queue_id = resp['replay_queue_id']
    result = nil
    10.times do
      upload_status = replay.upload_status(queue_id)
      unless upload_status['replay_id']
        sleep 1
        next
      end
      replay_info = replay.replay_info(upload_status['replay_id'], :players, :map)

      @game = Game.where(id: replay_info['replay_id']).first_or_create(
          id: replay_info['replay_id'],
          date: replay_info['replay_date'],
          url: replay_info['replay_url'],
          format: replay_info['format'],
          game_type: replay_info['game_type'],
          season_id: replay_info['season_id'],
          replay_version: replay_info['replay_version'],
      )

      if replay_info['map']['maps_id'] != 0 && !replay_info['map']['map_image'].nil?
          map_url = "http://sc2replaystats.com/images/maps/large/#{replay_info['map']['map_image']}"
          open(map_url) do |f|
            map = Map.find_or_create_by(name: replay_info['map']['map_name'])
            @game.map = map
            @game.map.image.attach(io: f, filename: replay_info['map']['map_image'])
          end
      end

      replay_info['players'].each do |data|
        player = Player.where(id: data['players_id']).first_or_create(
            id: data['players_id'],
            bnet_url: data['player']['battle_net_url'],
            server: data['player']['battle_net_url'].split('.')[0].split('//')[1],
            bnet_id: data['player']['character_link_id'],
            name: data['player']['players_name']
        )
        if data['player']['players_name'] != player.name
          player.update(name: data['players_name'])
        end
        GamePlayer.where(game: @game, player: player).first_or_create(
            player: player,
            game: @game,
            winner: data['winner'] == 1,
            clan: data['clan'],
            race: data['race'],
            mmr: data['mmr'],
            division: data['division'],
            server_rank: data['server_rank'],
            global_rank: data['global_rank'],
            apm: data['apm'],
            team: data['team'],
            color: data['color'],
            guilty_count: 0,
            innocent_count: 0
        )
      end
      result = replay_info
      break
    end
    if result
      redirect_to accuse_player_path(id: @game.id)
    else
      render nothing: true, status: 500
    end
  end

  def update
    case @game_player.accuse(
        ip: request.remote_ip,
        winner: params[:winner]
    )
    when :already_voted
      flash[:notice] = "You've already reported this player"
    when :success
      flash[:notice] = "Successfully reported player"
    else
      flash[:notice] = "Wrong winner selected"
    end

    redirect_to @game_player
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game_player
      @game_player = GamePlayer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def game_player_params
      params.require(:game_player).permit(:is_accused, :winner, :evidence, :clan, :race, :mmr, :division, :server_rank, :global_rank, :apm, :team, :color, :guilty_count, :innocent_count, :game_id, :player_id)
    end
end
