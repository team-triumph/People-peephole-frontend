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

 this.$el.html(this.template({ sub: this.collection.toJSON() }));

}

// addSubPic: function(event) {

//   event.preventDefault();

//   var self = this,
//   form = $(event.target),

// }


});


}());









