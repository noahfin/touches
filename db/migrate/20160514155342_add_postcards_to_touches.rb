class AddPostcardsToTouches < ActiveRecord::Migration
  def change
    add_column :touches, :postcards, :integer
  end
end
