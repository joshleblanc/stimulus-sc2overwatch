Rails.application.routes.draw do
  root to: "game_players#index"
  get 'replay/accuse/:game_id', to: "replay#show_accusation_form"
  post 'replay/accuse/:game_id', to: "replay#accuse"
  post 'replay/create'

  resources :players, only: [:index, :show]
  resources :games, only: [:show, :index]
  # get 'players', controller: :players, action: :index
  # get 'players/:id/games', controller: :players, action: :games
  # get 'players/:id/game/:game_id', controller: :players, action: :game
  post "/games/:id/accuse", to: "games#accusation", as: :accuse_game_player
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
