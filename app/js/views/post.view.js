
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


  $('.container').html(this.el);

},

render: function (){

   // ({ post: this.collection.toJSON() })

  var self = this;

  var allPosts = $.get('https://aqueous-brushlands-9148.herokuapp.com/posts', function (){
    var data = allPosts.responseJSON;
    }).done(function (data){
      self.$el.html(self.template(data)); //{image: allPosts.responseJSON}
      var image = data[1].image;
      console.log(image);
    });


    $('#addPost').html(this.template());


  },



});


}());
