class Play < ApplicationRecord
  belongs_to :listener, class_name: 'User', foreign_key: :user_id
  belongs_to :playlist_item
end
