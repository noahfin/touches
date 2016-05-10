
class Api::V1::ContactsController < Api::V1::BaseController
	def index
			respond_with Contact.all
	end

	def create 
		respond_with :api, :v1, Contact.create(contact_params)
	end

	def destroy
		respond_with Contact.destroy(params[:id])
	end

	def update
		item = Contact.find(params["id"])
		contact.update_attributes(contact_params)
		respond_with item, json: item
	end

	private

	def contact_params
		params.require(:contact).permit(:id, :name, :email, :address, :phone, :touch_id)
	end
end
