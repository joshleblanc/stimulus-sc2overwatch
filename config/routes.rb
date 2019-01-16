Rails.application.routes.draw do
  get 'replay/upload'
  post 'replay/create'
  resources :voters
  resources :game_players
  resources :games
  resources :players
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
