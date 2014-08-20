/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items



Meteor.publish('main1314', function() {
  return Main1314.find({}, {sort: {PTS: -1}, limit: 100});
});

// Publish a single item

// Meteor.publish('singleItem', function(id) {
//   return Items.find(id);
// });