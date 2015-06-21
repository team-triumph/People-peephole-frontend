
// linked

;(function (){

'use strict';


app.Views.Post = Backbone.View.extend({


  className: 'post',

  template: hbs.post,

  imagesTemplate: hbs.imgs,

  events: {
    'click #deletePost' : 'deletePost',
    'click #guessPost/:id' : 'guessPost'
  },


initialize: function  (options) {

  var args = options || {};

  this.collection = args.collection;

  this.render();
  $('.container').html(this.el);

},

render: function (){

  // this.$el.html(this.template); //({ post: this.collection.toJSON() })

  var self = this;

  // $('.container').append('#addPost');

  // var allPosts = $.get('https://aqueous-brushlands-9148.herokuapp.com/posts', function (data){
    // var data = allPosts.responseJSON;
    this.collection.fetch({"images": "url"});
    console.log(images);
    // var data = get(image);
    // console.log(data);
    // }).done(function (data){
      // self.$el.html(self.template({ "image": "url"/* allPosts.responseJSON */ }));
    // });

    // $('#addPost').html(this.imagesTemplate);

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
