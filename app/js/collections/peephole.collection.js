;( function (){

  'use strict';

  app.Collection.Peephole = new Backbone.Collection.extend ({

    model: app.Models.Peephole,

    url: app.rootURL

  });


}());
