Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  root to: redirect('game_players')

  get 'games/:id/accuse', to: 'games#accuse', as: :accuse_player
  post 'games/:id/accuse', to: 'games#update', as: :update_game

  get 'players/search', to: "players#search", as: :search_players
  resources :game_players
  resources :players, only: [:index, :show]
end
