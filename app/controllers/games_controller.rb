class GamesController < ApplicationController
  before_action :set_game
  def accuse
  end

  def update
    case @game.accuse_player(request.ip, params[:player], params[:evidence])
    when :success
      flash[:notice] = "Successfully reported player"
    when :already_voted
      flash[:notice] = "You've already reported this player"
    else
      flash[:notice] = "Something's gone horrible wrong"
    end
    redirect_to @game.game_players.find_by(player_id: params[:player])
  end

  private
  def set_game
    @game = Game.find(params[:id])
  end
end