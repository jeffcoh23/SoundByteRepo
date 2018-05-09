class StartItUp < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :track_uid, null: false
      t.string :image_url
      t.string :preview_url, null: false
      t.string :song_title, null: false
      t.string :artists, null: false
      t.string :service_name
      t.timestamps
    end

    create_table :playlist_items do |t|
      t.references :user, foreign_key: true, null: false, index: true
      t.references :song, foreign_key: true, null: false, index: true
      t.timestamps
    end

    create_table :follows do |t|
      t.integer :follower_id, null: false, index: true
      t.integer :followed_id, null: false, index: true
      t.timestamps
    end

    create_table :likes do |t|
      t.references :user, foreign_key: true, null: false, index: true
      t.references :playlist_item, foreign_key: true, null: false, index: true
      t.timestamps
    end

    create_table :plays do |t|
      t.references :user, foreign_key: true, null: false, index: true
      t.references :playlist_item, foreign_key: true, null: false, index: true
      t.timestamps
    end
  end

  def down
  end
end
