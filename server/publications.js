/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items

Meteor.publish('allItems', function() {
  return Items.find();
});

Meteor.publish('main1314', function() {
  return Main1314.find();
});

// Publish a single item

Meteor.publish('singleItem', function(id) {
  return Items.find(id);
});