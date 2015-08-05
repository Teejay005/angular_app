module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-pouchdb/angular-pouchdb.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/spec/**/*.js'
    ],

    exclude: [],

    port: 8000,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome']

    // singleRun: false
  });
};
