class AddMoreUrls < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :feed_url, :string, null: false
    add_column :photos, :show_url, :string, null: false
  end
end
