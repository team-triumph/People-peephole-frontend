;(function (){

'use strict';

app.Views.Login = Backbone.View.extend({

  className: 'login',


  events: {

    'submit #logIn' : 'addLogin'
  },


  template: hbs.login,


  initialize: function (options) {

    var args = options || {};

    this.collection = app.Collections.Login

    this.render();
    $('.container').html(this.el);

  },

  render: function (){


    this.$el.html(this.template); //({ login: this.collection.toJSON() })


  },

  addLogin: function(event) {

       event.preventDefault();

        var user = {
          username: $('#userName').val(),
          password: $('#password').val()
       };

       var logInstance = new app.Models.User(user);

       this.collection.add(logInstance);

       $.post('https://aqueous-brushlands-9148.herokuapp.com/users/register', logInstance.toJSON()).success( function (data){
          Cookies.set('access_token', data.user.access_token);
          Cookies.set('username', data.user.username);
          Cookies.set('id', data.user.id);

          app.loggedIn = true;
          app.mainRouter.navigate('', {trigger: true});
       });

  },



});














}());
