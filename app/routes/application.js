import Ember from 'ember';
import { getJSON } from 'jquery';

var ApplicationRoute = Ember.Route.extend({

  model: function() {
    return getJSON('/api/v1/courses')
  }

});

export default ApplicationRoute;

