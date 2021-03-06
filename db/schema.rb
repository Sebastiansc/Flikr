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

ActiveRecord::Schema.define(version: 20161109191709) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "album_photos", force: :cascade do |t|
    t.integer  "album_id",   null: false
    t.integer  "photo_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_album_photos_on_album_id", using: :btree
    t.index ["photo_id"], name: "index_album_photos_on_photo_id", using: :btree
  end

  create_table "albums", force: :cascade do |t|
    t.string   "title",          null: false
    t.text     "description"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "owner_id",       null: false
    t.integer  "cover_photo_id"
    t.index ["owner_id"], name: "index_albums_on_owner_id", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.text     "body",       null: false
    t.integer  "author_id",  null: false
    t.integer  "photo_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id", using: :btree
    t.index ["photo_id"], name: "index_comments_on_photo_id", using: :btree
  end

  create_table "favorites", force: :cascade do |t|
    t.integer  "photo_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["photo_id", "user_id"], name: "index_favorites_on_photo_id_and_user_id", using: :btree
  end

  create_table "photos", force: :cascade do |t|
    t.string   "img_url",                    null: false
    t.string   "title",                      null: false
    t.text     "description", default: ""
    t.integer  "author_id",                  null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "thumb_url",                  null: false
    t.string   "feed_url",                   null: false
    t.string   "show_url",                   null: false
    t.boolean  "public",      default: true
    t.index ["author_id"], name: "index_photos_on_author_id", using: :btree
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "photo_id",   null: false
    t.integer  "tag_id",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["photo_id"], name: "index_taggings_on_photo_id", using: :btree
    t.index ["tag_id"], name: "index_taggings_on_tag_id", using: :btree
  end

  create_table "tags", force: :cascade do |t|
    t.string   "name",           null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.string   "background_url"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                                      null: false
    t.string   "session_token",                                                                                                                 null: false
    t.string   "password_digest",                                                                                                               null: false
    t.datetime "created_at",                                                                                                                    null: false
    t.datetime "updated_at",                                                                                                                    null: false
    t.string   "image_url",       default: "https://res.cloudinary.com/flikr/image/upload/c_scale,h_195/v1478245250/profile_avatar_aiyfxi.png"
    t.string   "cover_photo",     default: "https://res.cloudinary.com/flikr/image/upload/v1478238983/cover_photo_t1gvjt.jpg"
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
