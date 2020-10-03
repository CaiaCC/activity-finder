class Api::FavoritesController < ApplicationController
  def index
    favorites = Favorite.where(user_id: 1)
    render json: favorites
  end

  def show
    favorite = Favorite.where(user_id: 1)
    render json: favorite
  end

  def create
    favorite = Favorite.new(favorite_params)
    favorite.save
  end
  
  def destroy
    favorite = Favorite.find(params[:id])
    favorite.destroy
  end

  private
  def favorite_params
    params.require(:favorite).permit(:user_id, :activity_id)
  end
end
