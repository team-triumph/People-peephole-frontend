;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({
    initialize: function(options){

      var args= options || {};
      this.collection = args.collections;
    },

    routes: {
      '' : 'homePage',
      'login' : 'loginPage',
      'register' : 'registerPage',
      'guess/:id' : 'guessPage',
      'submit' : 'submitPage'

    },


    homePage: function () {
      new app.Views.Post({
      collection: this.collection
    });
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





