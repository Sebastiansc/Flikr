class AddThumbUrl < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :thumb_url, :string, null: false
  end
end
