class AddTouchIdToContacts < ActiveRecord::Migration
  def change
  		add_reference :contacts, :touch, index: true, foregign_key: true
  end
end
