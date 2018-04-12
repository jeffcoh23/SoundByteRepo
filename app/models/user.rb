class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :followers, class_name: 'Relationship',
                       foreign_key: :follower_id,
                       dependent:   :destroy

  has_many :followees, class_name: 'Relationship',
                       foreign_key: :followed_id,
                       dependent:   :destroy

  has_many :songs

  scope :song_list, -> { where('song.user_id = ?', id) }
end
