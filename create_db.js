
db.createCollection("user")
db.createCollection("movies")
db.user.insert({name: "Ada Lovelace", age: 205})
db.movies.insertMany( [
    {
       title: 'Titanic',
       year: 1997,
       genres: [ 'Drama', 'Romance' ]
    },
    {
       title: 'Spirited Away',
       year: 2001,
       genres: [ 'Animation', 'Adventure', 'Family' ]
    },
    {
       title: 'Casablanca',
       genres: [ 'Drama', 'Romance', 'War' ]
    }
 ] )