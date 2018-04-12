# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
  [
    { email: 'jeffcoh23@gmail.com', password: 'test12345', user_name: 'jeffcoh23' },
    { email: 'petercohen@gmail.com', password: 'test12345', user_name: 'petercohen' },
    { email: 'jillsahner@gmail.com', password: 'test12345', user_name: 'jillsahner' },
    { email: 'jessegalina@gmail.com', password: 'test12345', user_name: 'jessegalina' },
    { email: 'andrewba@gmail.com', password: 'test12345', user_name: 'andyb' }

  ]
)

# Song.create!(
#   [
#     {}
#   ]
# )
