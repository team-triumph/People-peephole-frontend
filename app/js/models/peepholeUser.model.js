;( function (){

  'use strict';

  app.Models.PeepholeUser = Backbone.Model.extend({

    url : app.rootURL + '/users/register/'

    defaults: {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: ''

    }

  });




}());
