
;(function (){

  'use strict';

  var allPeephole = new app.Collections.User();

    allPeephole.fetch().done( function (){
      app.mainrouter = app.Routers.MainRouter({
      collection: allPeephole
    });

    Backbone.history.start();

  });

}());

