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

  this.route('oniceevents', {
    path: '/oniceevents',
    template: 'oniceevents',
    waitOn: function () {
  
      return Meteor.subscribe('mainES1314');
    },
    data: function () {
      return {
        mainES1314: MainES1314.find()
      }
    }
  });

  this.route('possession', {
    path: '/possession',
    template: 'possession',
    waitOn: function () {
  
      return Meteor.subscribe('mainES1314');
    },
    data: function () {
      return {
        mainES1314: MainES1314.find()
      }
    }
  });

  this.route('generic', {
    path: '/generic',
    template: 'generic',
    waitOn: function () {
  
      return Meteor.subscribe('gamesplayed');
    },
    data: function () {
      return {
        main1314: Main1314.find()
      }
    }
  });
 
  this.route('deployment', {
    path: '/deployment',
    template: 'deployment',
    waitOn: function () {
  
      return Meteor.subscribe('deployment');
    },
    data: function () {
      return {
        main1314: Main1314.find()
      }
    }
  });

  this.route('homeroad', {
    path: '/homeroad',
    template: 'homeroad',
    waitOn: function () {
  
      return Meteor.subscribe('homeroad1314');
    },
    data: function () {
      return {
        homeroad1314: Homeroad1314.find()
      }
    }
  });

  this.route('legend', {
    path: '/legend',
    template: 'legend',
    waitOn: function () {
  
      return Meteor.subscribe('legend');
    },
    data: function () {
      return {
        legend: Legend.find()
      }
    }
  });

   this.route('specialteams', {
    path: '/specialteams',
    template: 'specialteams',
    waitOn: function () {
  
      return Meteor.subscribe('specialteams1314');
    },
    data: function () {
      return {
        specialteams1314: Specialteams1314.find()
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
  this.route('dashboard');
  this.route('glossary');

  this.route('teams');

  this.route('login');

  this.route('signup');

  this.route('forgot');

});
