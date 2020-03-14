class CopyGameMapsToMaps < ActiveRecord::Migration[5.2]
  def up
    Game.find_each do |game|
      map = Map.find_or_create_by(name: game.attributes["map"])
      game.map_id = map.id
      game.save!
    end
    remove_column :games, :map
    remove_column :games, :map_image
  end

  def down

    add_column :games, :map, :string
    add_column :games, :map_image, :string

    Game.find_each do |game|
      map = Map.find_by(id: game.map_id)
      game.update(map: map.name)
    end

    Map.destroy_all
  end
end
