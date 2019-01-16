class Player < ApplicationRecord
  has_many :game_players
  has_many :games, through: :game_players
end
