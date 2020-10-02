class BookingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :activity_id, :number_of_participants, :price_per_person
end
