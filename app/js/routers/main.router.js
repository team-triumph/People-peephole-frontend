;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({
    initialize: function(options){

      var args= options || {};
      this.collection = args.collections;
    },

    routes: {
      '' : 'homepage',
      'login' : 'loginPage',
      'register' : 'registerPage',
      'guess/:id' : 'guessPage',
      'submit' : 'submitPage'

    },

    registerPage: function () {
      new app.Views.Register();
      // collection = app.Collections.User;
    }


  });

}());
