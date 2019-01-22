class Player < ApplicationRecord
  has_many :game_players
  has_many :games, through: :game_players

  def last_report
    game_players.order(:updated_at)[0].updated_at
  end

  def num_accused
    game_players.inject(0) { |s, m| s + (m.guilty_count || 0) }
  end
end
