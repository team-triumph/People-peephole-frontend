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
      "Access-Token" :  Cookies.get('access_token')
    }

  });



}());


// users/register url for registration view
