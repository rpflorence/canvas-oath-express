var spawn = require('child_process').spawn;

module.exports = function(grunt) {
  grunt.registerTask('bower', function() {
    var done = this.async();
    var bowerImport = spawn('bower-import');
    bowerImport.stdout.on('data', function(data) {
      console.log(data.toString());
    });
    bowerImport.on('close', done);
  });
};
