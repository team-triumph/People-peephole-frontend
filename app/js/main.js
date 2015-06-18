
;(function (){

  'use strict';

  var allPeephole = new app.Collections.Peephole();

    allPeephole.fetch().done( function (){
      collection: allPeephole
    });

    Backbone.history.start();

}());

