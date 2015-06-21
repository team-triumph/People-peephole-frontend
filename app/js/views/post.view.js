
// linked

;(function (){

'use strict';


app.Views.Post = Backbone.View.extend({


  className: 'post',

  template: hbs.post,

  // imagesTemplate: hbs.imgs,

  events: {
    'click #deletePost' : 'deletePost',
    'click #guessPost/:id' : 'guessPost'
  },


initialize: function  (options) {

  var args = options || {};

  this.collection = args.collections;
  this.allPosts = args.allPosts;

  this.render();
  // this.collection.fetch().success (function (){
  //   this.render();
  // })

  $('.container').html(this.el);

},

render: function (){

  // var postView = {
  //   image: image,
  //   answer: answer
  // }

  // console.log(postView);

  // $.ajax({
  //   url: 'https://aqueous-brushlands-9148.herokuapp.com/posts',
  //   type: 'GET',
  //   dataType: 'json',
  //   data: postView,

  // })

  this.$el.html(this.template); // ({ post: this.collection.toJSON() })

  // var self = this;

  // var allPosts = $.get('https://aqueous-brushlands-9148.herokuapp.com/posts', function (data){
  //   var data = allPosts.responseJSON;
  //   }).done(function (data){
  //     var image = data.post[1].image;
  //     self.$el.html(self.template(image));
  //     console.log(self.$el);
  //     console.log(self.$el.html);
      // console.log(self.$el.html(self.template));


      // console.log(data);
      // console.log(image);
    // });

    // $('#addPost').html(this.template);

// image: allPosts.responseJSON

    // self.$el.html(self.template(image));
    // data = allPosts.responseJSON.post;
    // console.log(post);

    // var image = post[0].image;
    // console.log(image);
    // $('#addPost').html(image);

    // var data = allPosts.responseText;
    // var jsonResponse = JSON.parse(data);
    // console.log(jsonResponse);


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
