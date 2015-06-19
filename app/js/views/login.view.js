;(function (){

'use strict';

app.Views.Login = Backbone.View.extend({

  className: 'login',


  events: {

    'submit #logIn' : 'addLogin',
    'click #rout2Reg' : 'addReg'

  },


  template: hbs.login,


  initialize: function (options) {

    var args = options || {};

    this.collection = app.Collections.Login

    this.render();
    $('.container').html(this.el);

  },

  render: function (){


    this.$el.html(this.template);


  },

  addLogin: function(event) {

    event.preventDefault();




  },

  addReg: function(event) {

      //

  }


});














}());
