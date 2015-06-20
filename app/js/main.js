
;(function (){

  'use strict';

  var allPeephole = new app.Collections.User();


    allPeephole.fetch().success( function (){
      app.mainRouter = new app.Routers.mainRouter({
        collection: allPeephole
      });

      console.log(allPeephole);

      app.loggedIn = (Cookies.get('access_token') !== undefined) ? true : false;

      Backbone.history.start();

    });

}());
