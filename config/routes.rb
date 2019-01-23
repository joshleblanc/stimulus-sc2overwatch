Rails.application.routes.draw do
  root to: "game_players#index"
  get 'games/:id/accuse', to: "games#accuse", as: :accuse
  post 'games/:id/accuse', to: "games#update", as: :update_game
  post 'games/upload', to: "games#upload", as: :upload_game

  resources :players, only: [:index, :show]
  resources :games, only: [:show, :index]
end
