
// linked

;(function (){

'use strict';


app.Views.Post = Backbone.View.extend({


  className: 'post',

  events: {

   'click, #deletePost' : 'deletePost',
   'click #guessPost' : 'guessPost'


  },


template: hbs.post,

initialize: function  (options) {

  var args = options || {};

  this.collection = app.Collections.Post;

  this.render();
  $('.container').html(this.el);

},

// render: function (){

//   this.$el.html(this.template); //({ post: this.collection.toJSON() })
// },




//   var allPosts = new app.Models.Post();

//   this.collection.add(allPosts);

//   $.get('https://aqueous-brushlands-9148.herokuapp.com/users/register').success( function (data){



//   });


render: function (){
 // $('#addPost').html(thiss.template);

 this.$el.html(this.template); //({ post: this.collection.toJSON() })
 // var self = this;
 var allPosts = $.get('https://aqueous-brushlands-9148.herokuapp.com/posts', function (data){
   var x = allPosts.responseJSON.post;

   console.log(x);

   }).done ( function (data){

   // this.$el.html(this.template({addPost: allPosts.responseJSON}));
   });

 },





  deletePost: function (event) {



   },




});







}());
