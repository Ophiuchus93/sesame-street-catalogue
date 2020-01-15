class Api::CharactersController < ApplicationController
  before_action :set_character, only: [:show, :update, :destroy]

  def index
    render json: Character.all
  end

  def show
    render json: @character
  end

  def create
    character = Character.new(character_params)

    if character.save 
      render json: character
    else
      render json: character.errors, status: 422
    end
  end

  def update
    if @character.update(character_params)
      render json: @character
    else
      renser json: @character.errors, status: 422
    end
  end

  def destroy
    @character.destroy
  end

  private
    def set_character
      @character = Character.find(parmas[:id])
    end

    def character_params
      params.require(:character).permit(:name. :description)
    end
end
