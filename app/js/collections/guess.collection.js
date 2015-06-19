;(function (){

  'use strict';

  app.Collections.Guess = Backbone.Collection.extend ({

    model: app.Models.Guess,

    url: app.rootURL //+ path
  });

}());
