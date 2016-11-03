class RemoveHeightAndWidth < ActiveRecord::Migration[5.0]
  def change
    remove_column :photos, :width
    remove_column :photos, :height
  end
end
