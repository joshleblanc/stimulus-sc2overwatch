class Player < ApplicationRecord
  has_many :game_players
  has_many :games, through: :game_players

  def self.accused_players
    Player.includes(:game_players).where(game_players: { is_accused: true })
  end

  def last_report
    game_players.sort_by(&:updated_at)[0].updated_at
  end

  def num_accused
    game_players.inject(0) { |s, m| s + (m.guilty_count || 0) }
  end
end
