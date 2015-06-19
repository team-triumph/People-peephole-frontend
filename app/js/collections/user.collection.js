;( function (){

  'use strict';

  app.Collections.User = Backbone.Collection.extend ({

    model: app.Models.User,

    url: app.rootURL,//+ '/user/register'

    parse: function(data){
      return data.post;
     }

  });


}());
