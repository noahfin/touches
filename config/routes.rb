Rails.application.routes.draw do
  root to: 'sites#index'
  namespace :api do
    namespace :v1 do  
      resources :contacts, only: [:index, :create, :destroy, :update]
    end
  end
  namespace :api do
    namespace :v1 do  
      resources :touches, only: [:index, :update]
    end
  end
end


