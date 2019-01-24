class Game < ApplicationRecord
  has_many :game_players
  has_many :players, through: :game_players

  def accused_player
    accused_game_player.player
  end

  def accused_game_player
    game_players.where(is_accused: true).first
  end
end
