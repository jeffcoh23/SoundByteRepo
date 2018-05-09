User.create!([
  {email: "jeffcoh23@gmail.com", password: 'Test12345', encrypted_password: "$2a$11$ELRmSAI8fIJ93o43Q6ubIO912JNs2.NQ1K37xsJW1dBqrKAJeb9ei", user_name: "jeffcoh23", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 0, current_sign_in_at: nil, last_sign_in_at: nil, current_sign_in_ip: nil, last_sign_in_ip: nil, authentication_token: "NTF355z2xt-fVBg6RQtP"},
  {email: "tester@email.com", password: 'Test12345', encrypted_password: "$2a$11$VdeEbK14.4ZOHkWe2HHD/eObxjWmGRYfY/GwQw7SZovmH1Z9M2BFy", user_name: "tester", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 0, current_sign_in_at: nil, last_sign_in_at: nil, current_sign_in_ip: nil, last_sign_in_ip: nil, authentication_token: "ixFG22HyxCyRAXxHTKpe"}
])
Follow.create!([
  {follower_id: 1, followed_id: 2}
])
Song.create!([
  {track_uid: "2NyrXRn4tancYPW6JwtTl2", image_url: "https://i.scdn.co/image/b5be050a38314ab5a2f7e9dc00ac5268230ee5bf", preview_url: "https://p.scdn.co/mp3-preview/155643656a12e570e4dda20a9a24d9da765b9ac5?cid=28af7195311747a1ba3670cd8dbeed1a", song_title: "From The D To The A (feat. Lil Yachty)", artists: "Tee Grizzley, Lil Yachty", service_name: "spotify"},
  {track_uid: "1fEl5TPKRJAsuP6TqZ23hB", image_url: "https://i.scdn.co/image/206bc9b61d06a2397741b60557f63949c0a2ce1d", preview_url: "https://p.scdn.co/mp3-preview/a3fd5f178b7eb68b9dba4da9711f05a714efc966?cid=28af7195311747a1ba3670cd8dbeed1a", song_title: "D Rose", artists: "Lil Pump", service_name: "spotify"},
  {track_uid: "78J9MBkAoqfvyeEpQKJDzD", image_url: "https://i.scdn.co/image/84883a8fc5dc7f4019838562a5e258019c661300", preview_url: "https://p.scdn.co/mp3-preview/581a57693467c43948ff4e0c3620ea7ae28ab2cc?cid=28af7195311747a1ba3670cd8dbeed1a", song_title: "Step", artists: "Vampire Weekend", service_name: "spotify"},
  {track_uid: "2oN4q66KUcOnWO86FVyctY", image_url: "https://i.scdn.co/image/5978a8afe15c0ee312078f2a2caa56bf3634e52c", preview_url: "https://p.scdn.co/mp3-preview/1b60c2466a99d299ceedca34a8daf8bbe921dbce?cid=28af7195311747a1ba3670cd8dbeed1a", song_title: "Vitamin D", artists: "Ludacris, Ty Dolla $ign", service_name: "spotify"},
  {track_uid: "2MZSXhq4XDJWu6coGoXX1V", image_url: "https://i.scdn.co/image/0ecee6d7885e1e7cbe8ff5284706a3f0046d5748", preview_url: "https://p.scdn.co/mp3-preview/8b0ffffe73ff5ba8bc187516b468777969d7a843?cid=28af7195311747a1ba3670cd8dbeed1a", song_title: "Avril 14th", artists: "Aphex Twin", service_name: "Spotify"},
  {track_uid: "0fivzT98mFK9EZAtJtV2iW", image_url: "https://i.scdn.co/image/43422c174603fb4711614d5a4b4a924cd85f4f5c", preview_url: "https://p.scdn.co/mp3-preview/471515955e2e5a3c15170fc0190a6542e2cccc95?cid=28af7195311747a1ba3670cd8dbeed1a", song_title: "D U Down", artists: "Kevin Gates", service_name: "spotify"},
  {track_uid: "4XHQyvbrBsQaaBUW1VvmsL", image_url: "https://i.scdn.co/image/0b1709839523d5797e011ffd13fd57a320a5e59f", preview_url: "null", song_title: "My Band", artists: "D12", service_name: "spotify"},
  {track_uid: "41sIKltzKnhFsDXWTKjO3R", image_url: "https://i.scdn.co/image/9f1194897e7612b28d1b6db825c8650abaf5e34c", preview_url: "https://p.scdn.co/mp3-preview/f05bd674e4cc4e7d0f13829cb1001bf54a8e1b09?cid=28af7195311747a1ba3670cd8dbeed1a", song_title: "So Far Away", artists: "Agust D, Suran", service_name: "Spotify"},
  {track_uid: "7agnxnigAzIOP4zHAOXbsk", image_url: "https://i.scdn.co/image/d3c4bcf6934a096e8b5c0241340103ec9b4e53d2", preview_url: "https://p.scdn.co/mp3-preview/268b25055b2d34ef8e8f985a93f2c54b9a53ef84?cid=28af7195311747a1ba3670cd8dbeed1a", song_title: "Reminisce in D", artists: "kvíðahópur", service_name: "Spotify"},
  {track_uid: "39N9RPD9MRb5WmoLzNzPeA", image_url: "https://i.scdn.co/image/10f0018cda6c54f4f8a79c636d505904aab8853c", preview_url: "https://p.scdn.co/mp3-preview/2365ee165310b1894a9add345fb3c4d3ea928898?cid=28af7195311747a1ba3670cd8dbeed1a", song_title: "X", artists: "Nicky Jam, J Balvin", service_name: "Spotify"}
])
PlaylistItem.create!([
  {user_id: 2, song_id: 5},
  {user_id: 1, song_id: 6},
  {user_id: 2, song_id: 7},
  {user_id: 2, song_id: 8},
  {user_id: 2, song_id: 9},
  {user_id: 2, song_id: 1},
  {user_id: 1, song_id: 3},
  {user_id: 1, song_id: 4},
  {user_id: 1, song_id: 2},
  {user_id: 1, song_id: 5},
  {user_id: 1, song_id: 1}
])
