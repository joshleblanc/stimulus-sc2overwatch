class PlayersController < ApplicationController
  before_action :set_player, only: [:show]

  def index
    @players = Player.joins(:game_players).where("game_players.is_accused = ?", true).group('players.id')
  end

  def search
    query = params[:q].downcase
    @players = Player.where('lower(name) like ? or cast(id as varchar(255)) like ?', "%#{query}%", "%#{query}%")
    render partial: 'search'
  end

  def show
  end

  private
    def set_player
      @player = Player.find(params[:id])
    end
end
