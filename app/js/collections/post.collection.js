;(function (){

  'use strict';

  app.Collections.Post = new Backbone.Collection.extend ({

    model: app.Models.Post,

    url: app.rootURL // + path

  });

}());
