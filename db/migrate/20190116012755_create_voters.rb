class CreateVoters < ActiveRecord::Migration[5.2]
  def change
    create_table :voters do |t|
      t.string :ip
      t.references :game_player, foreign_key: true

      t.timestamps
    end
  end
end
