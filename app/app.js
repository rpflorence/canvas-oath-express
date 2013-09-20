import Ember from 'ember';
import routes from './config/routes';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true
});

App.Router.map(routes);

export default App;

