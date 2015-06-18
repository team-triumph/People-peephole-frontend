;(function (){

  'use strict';

  // Globals
  window.app = {};
  window.app.Models = {};
  window.app.Collections = {};
  window.app.Views = {};
  window.app.Routers = {};

  // Root URL
  app.rootURL = 'tiy-515.herokuapp.com/collections/people_peephole';


  $.ajaxSetup({

    headers: {
      "Access-Token" :  Cookies.get('access_token')
    }

  });



}());


// users/register url for registration view
