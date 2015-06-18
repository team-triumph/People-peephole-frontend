
// linked

;(function (){

'use strict';


app.Views.Post = Backbone.View.extend({


  className: 'post',

  events: {

   'submit #addPost' : 'addPost'

  },


template: hbs.post,

initialize: function  (options) {

  var args = options || {};

  this.render();
  $('.container').html(this.el);

},

render: function (){

  this.$el.html(this.template({ post: this.collection.toJSON() }));
},


  addPost: function (event) {
    // needs a function



  var p = new app.Models.Post({


  });

  this.collection.add(p).save.success( function (){
    self.render();
  });

   }

});








}());
