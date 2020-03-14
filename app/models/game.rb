class Game < ApplicationRecord
  has_many :game_players
  has_many :players, through: :game_players
  belongs_to :map

  def winners
    game_players.select(&:winner)
  end

  def is_winner?(player_id)
    return true if player_id.nil?
    winners.any? { |w| w.player.id.to_s == player_id.to_s }
  end

  def accused_player
    accused_game_player.player
  end

  def accused_game_player
    game_players.where(is_accused: true).first
  end

  def accuse_player(ip, player, evidence)
    game_player = game_players.find_by(player_id: player)
    game_player.accuse(
        ip: ip,
        new_evidence: evidence
    )
  end
end
