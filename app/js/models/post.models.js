;(function (){

  'use strict';

  app.Models.Post = Backbone.Model.extend ({

    defaults: {
    image: '',
    id: ''
  },

  getImages: function (){
    return this.get('image');
  }

  });

}());
