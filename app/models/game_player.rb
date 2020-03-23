class GamePlayer < ApplicationRecord
  belongs_to :game
  belongs_to :player
  has_many :voters

  def game_map_image
    if game.map&.image.attached?
      game.map.image
    end
  end

  def accuse(ip:, new_evidence: nil, winner: nil)
    if voters.map(&:ip).include? ip
      :already_voted
    else
      Voter.create(
          ip: ip,
          game_player: self
      )
      if game.is_winner?(winner)
        if evidence.nil?
          update(
              is_accused: true,
              guilty_count: 1,
              evidence: new_evidence
          )
        else
          update(
              is_accused: true,
              guilty_count: guilty_count + 1
          )
        end
        :success
      else
        :wrong_winner
      end
    end

  end
end
