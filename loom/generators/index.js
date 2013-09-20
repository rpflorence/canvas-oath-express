var parent = require('loom-generators-ember/loom/generators/index');

var generator = module.exports = Object.create(parent);

generator.savePath = function() {
  return 'build/app/main.js';
};


