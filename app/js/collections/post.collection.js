;(function (){

  'use strict';

  app.Collections.Post = Backbone.Collection.extend ({

    model: app.Models.Post,

    url: app.rootURL // + path

  });

}());
