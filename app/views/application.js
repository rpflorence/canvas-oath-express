import Ember from 'ember';

var ApplicationView = Ember.View.extend({

  focusNewCourseInput: function() {
    if (!this.get('controller.addingCourse')) return;
    Ember.run.next(this, function() {
      this.$('#new-course-name').focus();
    });
  }.observes('controller.addingCourse')

});

export default ApplicationView;

