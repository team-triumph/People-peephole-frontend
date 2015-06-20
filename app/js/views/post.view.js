
// linked

;(function (){

'use strict';


app.Views.Post = Backbone.View.extend({


  className: 'post',

  template: hbs.post,

  events: {
    'click #deletePost' : 'deletePost',
    'click #guessPost/:id' : 'guessPost'
  },


initialize: function  (options) {

  var args = options || {};

  this.collection = app.Collections.Post;

  this.render();
  $('.container').html(this.el);

},

render: function (){

  this.$el.html(this.template); //({ post: this.collection.toJSON() })
  // var self = this;
  var allPosts = $.get('https://aqueous-brushlands-9148.herokuapp.com/posts/', function (post){
    post = allPosts.responseJSON;
    console.log(post);
    // var x =
    // var image = x.image;
    // console.log(x);
    // $('#addPost').html(image);

    });

  },



  // var allPosts = new app.Models.Post();

  //      this.collection.get(allPosts);

  //      $.get('https://aqueous-brushlands-9148.herokuapp.com/posts').success( function (data){
  //       var image = data.post.image;
  //      });

  // deletePost: function (event){

  // },

  // guessPost: function (event){

  // }
});








}());
