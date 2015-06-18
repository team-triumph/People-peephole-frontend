;(function (){

  'use strict';

  app.Router.MainRouter = Backbone.Router.extend({
    initialize: function(options){
      this.collection = options.collections;
    },

    routes: {
      '' : 'homepage',
      'login' : 'loginPage',
      'guess/:id' : 'guessPage',
      'submit' : 'submitPage'

    }



  });

}());
