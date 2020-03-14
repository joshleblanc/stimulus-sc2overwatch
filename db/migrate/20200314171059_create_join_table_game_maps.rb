class CreateJoinTableGameMaps < ActiveRecord::Migration[5.2]
  def change
    create_join_table :games, :maps do |t|
      # t.index [:game_id, :map_id]
      # t.index [:map_id, :game_id]
    end
  end
end
