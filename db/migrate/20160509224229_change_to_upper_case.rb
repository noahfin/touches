class ChangeToUpperCase < ActiveRecord::Migration
  def change
  	rename_column :contacts, :Name, :name
  	rename_column :contacts, :Email, :email 
  	rename_column :contacts, :Address, :address 
  	rename_column :contacts, :Phone, :phone 
  end
end
