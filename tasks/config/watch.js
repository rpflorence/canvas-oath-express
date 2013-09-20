module.exports = {
  templates: {
    options: {
      livereload: true
    },
    files: ['app/**/*.hbs'],
    tasks: ['emberTemplates']
  },
  js: {
    options: {
      livereload: true
    },
    files: ['app/**/*.js'],
    tasks: ['transpile']
  },
  bower: {
    files: ['bower.json'],
    tasks: ['bower', 'build']
  }
};

