;(function (){

  'use strict';

  app.Views.Register = Backbone.View.extend({

    className: 'register',

    template: hbs.register,

    events: {
      'submit #userInfo' : 'addUser'
    },

    initialize: function (options){
      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function(){

      this.$el.html(this.template); //({ user: this.collection.toJSON() })
    },

    addUser: function (event){
      event.preventDefault();

        var user = {
          first_name: $('#firstName').val(),
          last_name: $('#lastName').val(),
          username: $('#userName').val(),

          email: $('#email').val(),
          password: $('#password').val()
       };

       var userInstance = new app.Models.User(user);

       this.collection.add(userInstance);

       $.post('https://aqueous-brushlands-9148.herokuapp.com/users/register', userInstance.toJSON()).success( function (data){
          Cookies.set('access_token', data.user.access_token);
          // Cookies.set('username', data.user.username);
          Cookies.set('id', data.user.id);

          app.loggedIn = true;
          app.mainRouter.navigate('', {trigger: true});
       });

  }



});

}());

