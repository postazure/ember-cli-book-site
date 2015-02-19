import DS from 'ember-data';

var Review = DS.Model.extend({
  userName: DS.attr("string"),
  text: DS.attr('string'),
  rating: DS.attr('number', {defaultValue: 0}),
  book: DS.belongsTo('book', {async: true})
});


Review.reopenClass({
  FIXTURES: [
    {
      id: 1,
      userName: "John",
      text: "This is the worst book I've ever read.  I prefer ping pong...",
      rating: 1,
      book: 1
    },
    {
      id: 2,
      userName: "Martha",
      text: "Shame on you, John. This book is great! I hope you die.",
      rating: 5,
      book: 1
    },
    {
      id: 3,
      userName: "Momo",
      text: "Woof Woof Woof Woof I love this book.  Also I'm a dog k bye",
      rating: 4,
      book: 2
    },
    {
      id: 4,
      userName: "HotDog123",
      text: "Great stuff!  I'm a hot dog!  It's so hard to type these reviews without hands. This took me 3 years to type.",
      rating: 4,
      book: 3
    },
    {
      id: 5,
      userName: "CrazyDrummer99",
      text: "Good book, but I wish it talked more about drumming.  I love playing drums",
      rating: 3,
      book: 4
    },
    {
      id: 6,
      userName: "CrazyPianoGirl44",
      text: "Good book, but I wish it talked more about piano.  I love the piano",
      rating: 2,
      book: 4
    },
    {
      id: 7,
      userName: "50ShadesOfHEYYYY",
      text: "Expected a werewolf book, but got a depressing collection of stories about a bunch of cynical losers",
      rating: 2,
      book: 5
    },
    {
      id: 8,
      userName: "Colt",
      text: "A scathing takedown of the mindless materialism and overmedicated emptiness that has come to define the lives of far too many Americans. It's an all out assault on the veneer many people(myself included) hide behind as they run out the clock on their otherwise meaningless lives.",
      rating: 3,
      book: 7
    },
    {
      id: 9,
      userName: "somePerson123",
      text: "Oh to be a kid again...What a great read.",
      rating: 4,
      book: 8
    }
  ]

});

export default Review;
