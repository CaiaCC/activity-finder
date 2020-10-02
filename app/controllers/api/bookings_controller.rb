class Api::BookingsController < ApplicationController
  def index
    bookings = Booking.where(user_id: 1)
    render json: bookings
  end

  def show
    booking = Booking.where(user_id: 1)
    render json: booking
  end

  def create
    booking = Booking.new(booking_params)
    booking.save
  end

  def destroy
    booking = Booking.find(params[:id])  
    booking.destroy
  end
  
  
  private
  def booking_params
    params.require(:booking).permit(:user_id, :activity_id, :number_of_participants, :price_per_person)
  end
end
