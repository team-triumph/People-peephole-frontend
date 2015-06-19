;(function (){

  'use strict';

  // Globals
  window.app = {};
  window.app.Models = {};
  window.app.Collections = {};
  window.app.Views = {};
  window.app.Routers = {};

  // Root URL
  app.rootURL = 'https://aqueous-brushlands-9148.herokuapp.com/';


  $.ajaxSetup({

    headers: {
      "Access-Token" :  Cookies.get('access_token')
    }

  });



}());


