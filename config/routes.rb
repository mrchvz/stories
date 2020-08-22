Rails.application.routes.draw do
  get 'home' => 'pages#home'
  get 'about' => 'pages#about'

  resources :signups, except: [:delete, :update, :show, :index]
  get 'signups/new' => 'signups#new'
  get 'thanks' => 'signups#thanks'
  post 'create' => 'signups#create'

  root 'pages#home'

end
