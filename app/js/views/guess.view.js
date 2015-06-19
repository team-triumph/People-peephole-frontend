;(function (){

'use strict'

app.Views.Guess = Backbone.View.extend({


  className: 'guess',

  template: hbs.guess,


  events: {

      'submit #guessing' : 'guessOnPic'

  },

  initialize: function (options) {

      var args = options || {};

      this.guessId = args.guessId;
      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
  },


  render: function () {

    this.$el.html(this.template({ guess: this.collection.toJSON() }));

  },

  guessOnPic: function (event) {

    event.preventDefault();

}

});




}());







