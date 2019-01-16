json.extract! game_player, :id, :is_accused, :winner, :evidence, :clan, :race, :mmr, :division, :server_rank, :global_rank, :apm, :team, :color, :guilty_count, :innocent_count, :game_id, :player_id, :created_at, :updated_at
json.url game_player_url(game_player, format: :json)
