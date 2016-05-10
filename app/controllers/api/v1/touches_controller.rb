class Api::V1::ContactsController < Api::V1::BaseController
	def index
			respond_with Touch.all
	end

	def create 
		respond_with :api, :v1, Contact.create(contact_params)
	end

	def destroy
		respond_with Touch.destroy(params[:id])
	end

	def update
		item = Touch.find(params["id"])
		touch.update_attributes(touch_params)
		respond_with touch, json: touch
	end

	private

	def item_params
		params.require(:touch).permit(:id, :calls, :emails, :mail, :advertisements)
	end
end
