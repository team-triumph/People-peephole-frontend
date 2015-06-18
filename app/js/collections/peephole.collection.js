;( function (){

  'use strict';

  app.Collections.Peephole = new Backbone.Collection.extend ({

    model: app.Models.Peephole,

    url: app.rootURL

  });


}());
