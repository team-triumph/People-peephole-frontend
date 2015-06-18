;( function (){

  'use strict';

  app.Collections.Peephole = new Backbone.Collection.extend ({

    model: app.Models.PeepholeUser,

    url: app.rootURL + '/user/register'

  });


}());
