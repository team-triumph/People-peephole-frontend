;(function () {



  'use strict';

  app.Views.Register = new Backbone.View.extend({

    className: 'register',

    template: hbs.register,

    events: {
      'submit #addUser' : 'addUser'
    },

    initialize : function (options){
      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function(event){

      event.preventDefault();

      $('#addUserInfo').on('submit', function(e){

        e.preventDefault();

        var user = {
          firstName: $('#userFirstName').val(),
          lastName: $('#userLastName').val(),
          email: $('#email').val(),
          password: $('#password').val()
       };

       var userInstance = new app.Models.User(user);

       allPeephole.add(userInstance)

       $.post('https://aqueous-brushlands-9148.herokuapp.com/', userInstance.toJSON()).success( function (data){

        Cookies.set('access_token', data.access_token);
        Cookies.set('username', data.username);

       });

      });

  }

});

}());

