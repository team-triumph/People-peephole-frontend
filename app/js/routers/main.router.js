;(function (){

  'use strict';

  app.Routers.mainRouter = Backbone.Router.extend({
    initialize: function(options){

      var args= options || {};
      this.collection = args.collection;
    },

    routes: {
      '' : 'homePage',
      'login' : 'loginPage',
      'register' : 'registerPage',
      'guess/:id' : 'guessPage',
      'submit' : 'submitPage'

    },

    homePage: function () {
      if (app.loggedIn === true){
      new app.Views.Post({
      collection: app.Collections.Post
    });
    } else {
      app.mainRouter.navigate('login', {trigger: true});
    }
    },

    loginPage: function (){
      new app.Views.Login({
      collection: this.collection
    });
    },

    registerPage: function () {
      new app.Views.Register({
      collection: this.collection
    });
    },

    guessPage: function () {
      new app.Views.Guess({
      collection: this.collection
    });
    },

    submitPage: function () {
      new app.Views.Sub({
      collection: this.collection
    });
    }







  });

}());
