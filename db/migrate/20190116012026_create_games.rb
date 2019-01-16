class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :map
      t.datetime :date
      t.string :url
      t.string :format
      t.string :game_type
      t.integer :season_id
      t.string :replay_version
      t.string :map_image

      t.timestamps
    end
  end
end
