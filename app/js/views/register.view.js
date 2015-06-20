
;(function () {




  'use strict';


  app.Views.Register = Backbone.View.extend({


    className: 'register',

    template: hbs.register,

    events: {
      'submit #addUser' : 'addUser'
    },

    initialize: function (options){
      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function(){




      this.$el.html(this.template); //({ register: this.collection.toJSON() }));

    },

    addUser: function (event){
      event.preventDefault();


      $('#addUser').on('submit', function(e){


        e.preventDefault();

        var user = {
          first_name: $('#firstName').val(),
          last_name: $('#lastName').val(),
          username: $('#userName').val(),

          email: $('#email').val(),
          password: $('#password').val()
       };

       var userInstance = new app.Models.User(user);

       this.collection.add(userInstance).save.success( function (){

       $.post('https://aqueous-brushlands-9148.herokuapp.com//users/register', userInstance.toJSON()).success( function (data){

        Cookies.set('access_token', data.access_token);
        Cookies.set('username', data.username);
        // app.MainRouter.navigate('', {trigger: true});

       });
      });
    });

  }



});

}());

