Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { formats: :json } do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:index, :show, :create, :destroy, :update]
  end

end
