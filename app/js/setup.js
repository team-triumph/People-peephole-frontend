;(function (){

  'use strict';

  // Globals
  window.app = {};
  window.app.Models = {};
  window.app.Collections = {};
  window.app.Views = {};
  window.app.Routers = {};

  // Root URL
  app.rootURL = '...';


  $.ajaxSetup({

    headers: {
      "Access-Token" :  "12345"  //whatever value is stored in the cookie
    }

  });



}());


// users/register url for registration view
