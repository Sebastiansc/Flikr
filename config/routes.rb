Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { formats: :json } do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:index, :show, :create, :destroy, :update] do
      resources :comments, only: [:index]
      resources :tags, only: [:create]
    end
    resources :comments, only: [:create, :destroy, :update]
    resources :tags, only: [:destroy, :index]
  end

  get 'api/photos/tag/:tag_id', :to => 'api/photos#by_tag'
  delete 'api/photos/:photo_id/tags/:tag_id', :to => 'api/tags#untag'
end
