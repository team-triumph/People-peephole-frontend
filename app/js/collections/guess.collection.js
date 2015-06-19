;(function (){

  'use strict';

  app.Collections.Guess = new Backbone.Collection.extend ({

    model: app.Models.Guess,

    url: app.rootURL //+ path
  });

}());
