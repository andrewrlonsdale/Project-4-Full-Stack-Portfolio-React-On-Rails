Rails.application.routes.draw do
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}
      
      scope path: "api" do
        resources :assignments,:about, :contact, :users,  defaults: {format: :json}
      end

      resources :users  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
