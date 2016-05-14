
class Api::V1::ContactsController < Api::V1::BaseController
	def index
			respond_with Contact.all
	end

	def create 
		touch = Touch.create(calls: 0, emails: 0, mail: 0, advertisements: 0)
		respond_with :api, :v1, Contact.create(contact_params(touch.id))
	end

	def destroy
		Touch.destroy(params[:id])
		respond_with Contact.destroy(params[:id])
	end

	def update
		contact = Contact.find(params["id"])
		contact.update_attributes(contact_params())
		respond_with contact, json: contact
	end

	private

	def contact_params(touch_id)
		params.require(:contact).permit(:id, :name, :company, :email, :address, :phone).merge(touch_id: touch_id)
	end

	def touch_params
		params.require(:touch).permit(:id, :calls, :emails, :postcards, :mail, :advertisements)
	end
end
