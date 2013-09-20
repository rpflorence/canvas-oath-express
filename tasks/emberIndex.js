var loom = require('loom');

module.exports = function(grunt) {
  grunt.registerTask('emberIndex', function() {
    loom('index');
  });
};

