# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_14_171421) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "game_players", force: :cascade do |t|
    t.boolean "is_accused"
    t.boolean "winner"
    t.text "evidence"
    t.string "clan"
    t.string "race"
    t.integer "mmr"
    t.string "division"
    t.integer "server_rank"
    t.integer "global_rank"
    t.integer "apm"
    t.integer "team"
    t.string "color"
    t.integer "guilty_count", default: 0
    t.integer "innocent_count", default: 0
    t.bigint "game_id"
    t.bigint "player_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_game_players_on_game_id"
    t.index ["player_id"], name: "index_game_players_on_player_id"
  end

  create_table "games", force: :cascade do |t|
    t.datetime "date"
    t.string "url"
    t.string "format"
    t.string "game_type"
    t.integer "season_id"
    t.string "replay_version"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "map_id"
    t.index ["map_id"], name: "index_games_on_map_id"
  end

  create_table "games_maps", id: false, force: :cascade do |t|
    t.bigint "game_id", null: false
    t.bigint "map_id", null: false
  end

  create_table "maps", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "bnet_url"
    t.string "name"
    t.string "server"
    t.integer "bnet_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "voters", force: :cascade do |t|
    t.string "ip"
    t.bigint "game_player_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_player_id"], name: "index_voters_on_game_player_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "game_players", "games"
  add_foreign_key "game_players", "players"
  add_foreign_key "games", "maps"
  add_foreign_key "voters", "game_players"
end
