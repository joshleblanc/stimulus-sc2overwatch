class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :bnet_url
      t.string :name
      t.string :server
      t.integer :bnet_id

      t.timestamps
    end
  end
end
