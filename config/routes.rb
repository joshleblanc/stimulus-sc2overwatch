Rails.application.routes.draw do
  get 'replay/upload'
  get 'replay/accuse/:game_id', to: "replay#accuse"
  post 'replay/create'
  resources :voters
  resources :game_players
  resources :games
  resources :players
  post "/games/:id/accuse", to: "games#accusation", as: :accuse_game_player
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
