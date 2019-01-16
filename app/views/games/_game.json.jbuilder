json.extract! game, :id, :map, :date, :url, :format, :game_type, :season_id, :replay_version, :map_image, :created_at, :updated_at
json.url game_url(game, format: :json)
