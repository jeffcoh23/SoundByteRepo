class StartItUp < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :track_uid, null: false
      t.string :image_url
      t.string :preview_url
      t.string :song_title
      t.string :artists
      t.string :service_name, null: false
      t.timestamps
    end

    create_table :user_songs do |t|
      t.integer :user_id, null: false
      t.integer :song_id, null: false
    end

    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.integer :followed_id, null: false
      t.timestamps
    end

    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :song_id, null: false
    end

    add_index :follows, :follower_id
    add_index :follows, :followed_id
    add_index :follows, [:follower_id, :followed_id], unique: true
  end

  def down
  end
end
