class PlaylistItem < ApplicationRecord
  validates_uniqueness_of :song_id, scope: :user_id
  belongs_to :user
  belongs_to :song
  validates :user, presence: true
  validates :song, presence: true
  has_many :listens, dependent: :destroy
  has_many :likes, dependent: :destroy
end
