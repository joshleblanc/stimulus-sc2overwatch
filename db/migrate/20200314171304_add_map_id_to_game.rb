class AddMapIdToGame < ActiveRecord::Migration[5.2]
  def change
    add_reference :games, :map, foreign_key: true
  end
end
