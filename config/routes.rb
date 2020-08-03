Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root to: redirect('game_players')

  get 'games/:id/accuse', to: 'games#accuse', as: :accuse_player
  post 'games/:id/accuse', to: 'games#update', as: :update_game

  get 'players/search', to: "players#search", as: :search_players
  resources :game_players
  resources :players, only: [:index, :show]

  direct :cdn_proxy do |model, options|
    return nil if model.nil?
    if model.respond_to?(:signed_id)
      route_for(
        :rails_service_blob_proxy,
        model.signed_id,
        model.filename,
        options.merge(host: "sfo2.cdn.digitaloceanspaces.com")
      )
    else
      signed_blob_id = model.blob.signed_id
      variation_key  = model.variation.key
      filename       = model.blob.filename

      route_for(
        :rails_blob_representation_proxy,
        signed_blob_id,
        variation_key,
        filename,
        options.merge(host: "sfo2.cdn.digitaloceanspaces.com")
      )
    end
  end
end
