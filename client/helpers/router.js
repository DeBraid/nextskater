/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

// Filters
var filters = {

  myFilter: function () {
    // do something
  },

  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      alert('Please Log In First.')
      this.stop();
    }
  }

}

Router.onBeforeAction(filters.myFilter, {only: ['items']});

// Routes

Router.map(function() {

  // Items
  // Pages

  this.route('homepage', {
    path: '/'
  });

  this.route('stats', {
    path: '/stats',
    waitOn: function () {
      return Meteor.subscribe('main1314');
    },
    data: function () {
      return {
        main1314: Main1314.find()
      }
    }
  });

  this.route('fullblast', {
    path: '/full',
    template: 'fullblast',
    waitOn: function () {
  
      return Meteor.subscribe('mainES1314');
    },
    data: function () {
      return {
        mainES1314: MainES1314.find()
      }
    }
  });


  this.route('item', {
    path: '/items/:_id',
    waitOn: function () {
      return Meteor.subscribe('singleItem', this.params._id);
    },
    data: function () {
      return {
        item: Items.findOne(this.params._id)
      }
    }
  });


  this.route('contact');
  this.route('leaderboard');
  this.route('leaderboard');
  this.route('glossary');
  this.route('generic');
  this.route('teams');

  this.route('login');

  this.route('signup');

  this.route('forgot');

});
