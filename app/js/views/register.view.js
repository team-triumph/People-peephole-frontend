;(function (){

  'use strict';

  app.Views.Reegister = new Backbone.Views.extend({

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

      var self = this,
          form = form.find('#userInfo').val(),
          firstName = form.find('#userFirstName').val();
          lastName =form.find('#userLastName').val();
          email = form.find('#email').val();
          password = form.find('#password').val();
    }

      var user = new app.Models.PeepholeUser ({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      });

      this.collection.add(user).save().success( function (){
        self.render();
      });


  });

}());
