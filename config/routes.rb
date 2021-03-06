Rails.application.routes.draw do
  devise_for :users, only: []
  namespace :v1 do
    resources :sessions, only: [:create, :destroy]
    resources :likes
    resources :users
    resources :playlist_items
    resources :songs
    resources :feed
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
