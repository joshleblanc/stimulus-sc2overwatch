class PlayersController < ApplicationController
  before_action :set_player, only: [:show]

  def index
    @players = Player.accused_players.all.sort_by(&:num_accused).reverse
  end

  def search
    query = params[:q].downcase
    @players = Player.accused_players.where('lower(name) like ? or cast(player_id as varchar(255)) like ?', "%#{query}%", "%#{query}%")
    render partial: 'search_results'
  end

  def show
  end

  private
    def set_player
      @player = Player.find(params[:id])
    end
end
