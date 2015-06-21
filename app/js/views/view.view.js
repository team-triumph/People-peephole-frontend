;(function() {

  'use strict';

    app.Views.Main = Backbone.View.extend({

      className: 'main',

    events: {
    'click #deletePost' : 'deletePost',
    'click #delete': 'deleteAccount',
    'click #logoutBtn' : 'logout'
    },

    template: hbs.post,

    // templateSidebar: hbs.sidebar,


    initialize: function(options) {
      var args = options || {};
      this.collectionUsers = args.collectionUsers;
      this.collectionPosts = args.collectionPosts;
      this.collectionUserPosts = args.collectionUserPosts;
      this.collection

      this.render();
      $('.container').html(this.el);
    },

    render: function() {

      var self = this;

      var allUserPosts = $.get('https://aqueous-brushlands-9148.herokuapp.com/posts', function(data) {
        var response = allUserPosts.responseJSON;
      }).done(function (data) {
        self.$el.html(self.template({ image: allUserPosts.responseJSON }));
      });

      $('#addPost').html(this.templateSidebar(app.LoggedInUser));

     // $('deleteAccount').html(this.templateSidebar(app.deleteAccount));
    },



  logout: function(e) {
    e.preventDefault();
    // console.log(app.LoggedInUser.access_token);
    var cookie = Cookies.get('access_token', app.LoggedInUser.access_token);
    // console.log(cookie);
    Cookies.expire('access_token', app.LoggedInUser.access_token);
    app.mainRouter.navigate('', { trigger: true });
  }


});


}());
