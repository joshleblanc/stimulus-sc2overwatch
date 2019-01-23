class PlayersController < ApplicationController
  before_action :set_player, only: [:show]

  def index
    @players = Player.joins(:game_players).where("game_players.is_accused = ?", true).group('players.id')
  end

  def show
  end

  private
    def set_player
      @player = Player.find(params[:id])
    end
end
