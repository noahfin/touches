class CreateTouches < ActiveRecord::Migration
  def change
    create_table :touches do |t|
      t.integer :calls
      t.integer :emails
      t.integer :mail
      t.integer :advertisements

      t.timestamps 
    end
  end
end
