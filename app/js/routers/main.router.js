;(function (){

  'use strict';

  app.Routers.MainRouter = new Backbone.Router.extend({
    initialize: function(options){
      this.collection = options.collections;
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
