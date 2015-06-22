
// linked

;(function (){

'use strict';


app.Views.Post = Backbone.View.extend({


  className: 'posts',

  template: hbs.post,

  // imagesTemplate: hbs.imgs,

  events: {
    'click #deleteCard' : 'deleteCard',
    'click #guessPost/:id' : 'guessPost'
  },


initialize: function  (options) {

  var args = options || {};

  this.collection = args.collection;
  this.allPosts = args.allPosts;

  this.render();


  $('.container').html(this.el);

},

render: function (){

   // app.Collections.Post = this.collection;

  var self = this;

  var allPosts = $.get('https://aqueous-brushlands-9148.herokuapp.com/posts', function (){
    var data = allPosts.responseJSON;
    }).done(function (data){
      self.$el.html(self.template({image: allPosts.responseJSON})); //{image: allPosts.responseJSON}
      // var image = data[1].image; //tests the data object
      // console.log(image); //logs the image URL to confirm
    })

    $('#addPost').html(this.template()); //{ image: this.collection.toJSON() })

  },




deleteCard: function (event){

  event.preventDefault();

  app.Collections.Post = this.collection;
  var button = event.target;
  var eyeDee = $(button).data('post');
  var cardKill = this.collection.get(eyeDee);

  if(window.confirm("Are you sure you want to delete this card?")) {
    cardKill.destroy().success( function () {

      app.mainRouter.navigate('', {trigger: true});

    });
  }

}




});


}());
