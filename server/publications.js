/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items



Meteor.publish('main1314', function() {
  return Main1314.find({}, {sort: {PTS: -1}, limit: 10});
});

Meteor.publish('mainES1314', function() {
  return MainES1314.find({}, {sort: {"Adj Corsi": -1}, limit: 10});
});

// Publish a single item

// Meteor.publish('singleItem', function(id) {
//   return Items.find(id);
// });