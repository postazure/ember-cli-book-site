import Ember from 'ember';

export default Ember.ObjectController.extend({

  // ratings: Ember.computed.mapBy('reviews', 'rating'),
  // totalRatings: Ember.computed.sum('ratings'),
  // avgRating: function () {
  //   var totalRatings = this.get('totalRatings')
  //   var reviewCount = this.get('reviews.length')
  //   if(reviewCount > 0){
  //     return totalRatings / reviewCount
  //   }
  //   return 0
  // }.property('totalRatings', 'reviews.length')

  avgRating: function(){
    var reviews = this.get("reviews");
    var totalRating = 0;
    reviews.forEach(function (review) {
      // console.log(review.get("rating"))
      totalRating += review.get("rating");
    });
    return totalRating/reviews.get("length");

  }.property('reviews.@each.rating')
});
