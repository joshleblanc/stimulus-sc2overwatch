class GamePlayersController < ApplicationController
  before_action :set_game_player, only: [:show, :edit, :update, :destroy]

  def index
    @game_players = GamePlayer.where(is_accused: true).order(:updated_at).limit(25)
  end

  # GET /game_players/1
  # GET /game_players/1.json
  def show
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
