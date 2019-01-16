json.extract! player, :id, :bnet_url, :name, :server, :bnet_id, :created_at, :updated_at
json.url player_url(player, format: :json)
