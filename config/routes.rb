Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { formats: :json } do
    resources :users, only: [:create, :index, :show] do
      resources :albums, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :photos, only: [:show, :create, :destroy, :update] do
      resources :comments, only: [:index]
      resources :tags, only: [:create]
      resources :albums, only: [:index]
      resources :favorites, only: [:create]
    end

    resources :comments, only: [:create, :destroy, :update]
    resources :tags, only: [:destroy, :index]
    resources :albums, only: [:show, :create, :destroy, :update]
  end

  get 'api/photos/tag/:tag_id', to: 'api/photos#by_tag'

  get 'api/photos/:offset/:limit', to: 'api/photos#index'

  get 'api/users/:user_id/photos', to: 'api/users#user_photos'

  get 'api/photos/:photo_id/fans', to: 'api/photos#fans'

  get 'api/tags/photo/:photo_id', to: 'api/tags#photos'

  get 'api/albums/:album_id/photos', to: 'api/albums#album_photos'

  post 'api/users/:user_id/cover_photo/:photo_id',
       to: 'api/users#change_cover'

  post 'api/users/:user_id/cover_photo', to: 'api/users#change_profile_pic'

  post 'api/albums/:album_id/photos', to: 'api/photos#create_and_add_to_album'

  post 'api/albums/:album_id/cover/:photo_id',
       to: 'api/albums#change_cover_photo'

  post 'api/albums/:album_id/:photo_id', to: 'api/albums#add_photo'

  delete 'api/photos/:photo_id/favorites', to: 'api/favorites#destroy'

  delete 'api/albums/:album_id/:photo_id', to: 'api/albums#remove_photo'

  delete 'api/photos/:photo_id/tags/:tag_id', to: 'api/tags#untag'
end
