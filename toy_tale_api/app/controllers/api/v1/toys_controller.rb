class Api::V1::ToysController < ApplicationController

    def index
        @toys = Api::V1::Toy.all
        render json: @toys, except: [:created_at, :updated_at]
    end
end
