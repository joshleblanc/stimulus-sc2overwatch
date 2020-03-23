class MakeMapOptionalOnGames < ActiveRecord::Migration[5.2]
  def change
    change_column_null :games, :map_id, true
  end
end
