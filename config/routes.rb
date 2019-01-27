Rails.application.routes.draw do
  root to: 'game_players#index'

  get 'game_players/accuse/:game_id', to: 'game_players#accuse', as: :accuse_player
  post 'game_players/accuse/:game_id', to: 'game_players#update', as: :update_game_player

  get 'players/search', to: "players#search", as: :search_players
  resources :game_players, only: [:index, :show, :create]
  resources :players, only: [:index, :show]
end
