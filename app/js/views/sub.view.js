;(function (){

'use strict';


app.Views.Sub = Backbone.View.extend({

className: 'sub',

template: hbs.sub,

  events: {

    'submit #subPic' : 'addSubPic'

  },



initialize: function (options){

var args = options || {};




this.collection = args.collection;


this.render();
$('.container').html(this.el);

},

render: function () {


 this.$el.html(this.template); //({ sub: this.collection.toJSON() })


},

addSubPic: function (event) {

  event.preventDefault();

  var submit = {

    image: $('#image').val(),
    answer: $('#answer').val(),
    answer_1: $('#answer_1').val(),
    answer_2: $('#answer_2').val(),
    answer_3: $('#answer_3').val(),
  };

var submitInstance =  new app.Models.Post(submit);
  this.collection.add(submitInstance);


    $.post('https://aqueous-brushlands-9148.herokuapp.com/posts', submitInstance.toJSON()).success( function (){

      app.mainRouter.navigate('', {trigger: true});

    });

} //closes addSubPic



}); //closes backboneviewextend


}());  //iife









