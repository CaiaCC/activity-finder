Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  
  namespace :api do # /api/data
    # URL: api/activities/user/:user_id/favored for favored activity
    get '/activities/user/:user_id/favored', to: 'activities#user_favored_activities'

    # URL: api/activities/user/:user_id/booked for booked activity
    get '/activities/user/:user_id/booked', to: 'activities#user_booked_activities'
    
    # URL: api/users/:user_id/bookings/:id for deleting booked activity
    delete '/users/:user_id/bookings/:id', to: 'bookings#destroy'

    # URL: api/users/:user_id/favorites/:id for deleting favored activity
    delete '/users/:user_id/favorites/:id', to: 'favorites#destroy'
    
    # URL: api/users/:user_id/bookings for booking activity
    post '/users/:user_id/bookings', to: 'bookings#create'
    
    # URL: api/users/:user_id/booking for adding activity to favorites 
    post '/users/:user_id/favorites', to: 'favorites#create'

    
    resources :activities 

    resources :users do
      resources :bookings
      resources :favorites
    end
    # get '/data', to: 'tests#index'

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  
end
