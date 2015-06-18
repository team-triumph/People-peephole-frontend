;(function (){

  'use strict';

  app.Router.MainRouter = Backbone.Router.extend({
    initialize: function(options){
      this.collection = options.collections;
    },

    routes: {
      '' : 'homepage',
      'login' : 'loginPage',
      'register' : 'registerPage',
      'guess/:id' : 'guessPage',
      'submit' : 'submitPage'

    }

    registerPage: function () {
      new app.Views.RegisterView();
      collection = this.collection;
    }


  });

}());
