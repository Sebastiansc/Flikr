class AddBackgroundUrlToTag < ActiveRecord::Migration[5.0]
  def change
    add_column :tags, :background_url, :string
  end
end
