#the one that works
class Api::V1::TouchesController < Api::V1::BaseController
	def index
		  touches = Touch.all 
		  touches << { placeholder: []}
		  touches[-1] = { touch_contacts: Contact.all}		
			respond_with touches
	end
	
	def update
		touch = Touch.find(params["id"])
		touch.update_attributes(touch_params)
		respond_with touch, json: touch
	end

	private

	def touch_params
		params.require(:touch).permit(:id, :calls, :emails, :mail, :postcards, :advertisements)
	end
end