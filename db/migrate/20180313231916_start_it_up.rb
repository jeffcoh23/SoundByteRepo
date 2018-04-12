class StartItUp < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :uuid, null: false
      t.string :service_name, null: false
      t.timestamps
    end

    create_table :user_songs do |t|
      t.integer :user_id, null: false
      t.integer :song_id, null: false
    end

    create_table :relationships do |t|
      t.integer :follower_id, null: false
      t.integer :followed_id, null: false
      t.timestamps
    end

    add_index :relationships, :follower_id
    add_index :relationships, :followed_id
    add_index :relationships, [:follower_id, :followed_id], unique: true
  end

  def down
  end
end
