
;(function (){

  'use strict';

  var allPeephole = new app.Collections.User();

    allPeephole.fetch().success( function (){

      app.mainRouter = new app.Routers.MainRouter({
        collection: allPeephole
    });

    Backbone.history.start();

  });


  app.isLoggedIn = (Cookies.get('access_token') !== undefined) ? true : false;
    if (app.isLoggedIn) {
      console.log('Yep');
    } else {
      console.log('Nope');
    }



}());
