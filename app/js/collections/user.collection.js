;( function (){

  'use strict';

  app.Collections.User = new Backbone.Collection.extend ({

    model: app.Models.User,

    url: app.rootURL //+ '/user/register'

  });


}());
