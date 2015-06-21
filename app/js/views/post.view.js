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


initialize: function  () {

  // var args = options || {};

  // this.collection = app.Collections.Post;
  this.model = app.Models.Post;
  this.template = hbs.post;

  this.render();

  $('.container').html(this.el);

},

getRenderData: function (){
  var data = {
    image: this.model.getImages()
  };

return _.extend ( {}, this.model.toJSON(), data );

},

render: function() {
  this.$el.html(this.template(this.getRenderData()))
}


})





}());
