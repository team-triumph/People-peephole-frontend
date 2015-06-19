
// linked

;(function (){

'use strict';


app.Views.Post = Backbone.View.extend({


  className: 'post',

template: hbs.post,

  events: {

   'click #addPost' : 'addPost',
   'submit #addNewPic' : 'addNewPic'

  },



initialize: function  (options) {

  var args = options || {};

  this.collection = app.Collections.Post;

  this.render();
  $('.container').html(this.el);

},

render: function (){

  this.$el.html(this.template());
},


  addNewPic: function(event) {

    // needs function

  },

  addPost: function (event) {
    // needs a function


    event.preventDefault();


  var p = new app.Models.Post({

    // var self = this;


  });

  this.collection.add(p).save().success( function (){
    self.render();
  });

   }

});








}());
