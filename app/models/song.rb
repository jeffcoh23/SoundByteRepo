class Song < ApplicationRecord
  validates :track_uid, uniqueness: true
  has_many :playlist_item, dependent: :destroy
end
