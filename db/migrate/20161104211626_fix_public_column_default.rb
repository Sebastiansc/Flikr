class FixPublicColumnDefault < ActiveRecord::Migration[5.0]
  def change
    change_column_default(:photos, :public, true)
  end
end
