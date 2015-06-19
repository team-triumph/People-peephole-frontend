;(function (){

'use strict';


app.Views.Sub = Backbone.View.extend({


className: 'sub',

  events: {

    'submit #subPic' : 'addSubPic'

  }

template: hbs.sub,

initialize: function (options) {

var args = options || {};

this.collection = app.Collections.//whatever it's called

this.render();
$('.container').html(this.el);

},

render: function () {

 this.$el.html(this.template({ sub: this.collection.toJSON() }));

},

addSubPic: function(event) {

  event.preventDefault();

  var self = this,
  form = $(event.target),


}


});


}());









