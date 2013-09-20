module.exports = {
  app: {
    anonymous: true,
    type: 'amd',
    files: [
      {
        expand: true,
        cwd: 'app/',
        src: ['**/*.js', '!loader.js'],
        dest: 'build/app'
      }
    ]
  }
};

