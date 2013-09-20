module.exports = {
  app: {
    options: {
      templateBasePath: 'app/templates/',
      amd: true
    },
    files: {
      "build/app/templates.js": "app/templates/**/*.hbs"
    }
  }
};

