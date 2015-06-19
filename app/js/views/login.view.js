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


    this.$el.html(this.template); //({ login: this.collection.toJSON() })


  },

  addLogin: function(event) {

    // needs a function?

  },

  addReg: function(event) {

      //

  }


});














}());
