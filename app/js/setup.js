;(function (){

  'use strict';

  // Globals
  window.app = {};
  window.app.Models = {};
  window.app.Collections = {};
  window.app.Views = {};
  window.app.Routers = {};

  // Root URL
  // app.rootURL = 'https://aqueous-brushlands-9148.herokuapp.com/';
  app.rootURL = 'http://tiy-515.herokuapp.com/collections/joyave_image_dummy'

  $.ajaxSetup({

    headers: {
      "Access-Token" :  Cookies.get('access_token')
    }

  });



}());


