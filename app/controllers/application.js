import Ember from 'ember';

var ApplicationController = Ember.ArrayController.extend({

  addingCourse: false,

  actions: {
    addCourse: function() {
      this.set('addingCourse', true);
    },

    createCourse: function() {
      this.set('addingCourse', false);
    }
  }

});

export default ApplicationController;

