class GamesController < ApplicationController

  before_action :set_game, only: [:show]
  def show
    @game = Player.find(params[:game_id])
  end

  def index
    flash.now[:notice] = 'test'
    @game_players = GamePlayer.where(is_accused: true).order(:updated_at).limit(25)
  end

  private
  def set_game
    @game = Game.find(params[:id])
  end
end
