class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  acts_as_token_authenticatable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :active_relationships, class_name: 'Follow',
                                  foreign_key: :follower_id,
                                  dependent:   :destroy

  has_many :passive_relationships, class_name: 'Follow',
                                   foreign_key: :followed_id,
                                   dependent:   :destroy
  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships, source: :follower

  has_many :playlist_items
  has_many :likes

  has_many :songs, through: :playlist_items

end
