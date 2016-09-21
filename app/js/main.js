/*
  Please keep this here. More info here:
  https://github.com/tnajdek/angular-requirejs-seed/blob/master/app/js/main.js
*/
window.name = "NG_DEFER_BOOTSTRAP!";

requirejs.config({
  baseUrl: './js',

  paths: {
    'jquery': '../lib/jquery.min',
    'bootstrap': '../lib/bootstrap.min',
    'angular': '../lib/angular.min',
    'angular-animate': '../lib/angular-animate.min',
    'bootstrap-ui' : '../lib/ui-bootstrap.min',
    'tpls': '../lib/ui-bootstrap-tpls.min',
    'angular-route': '../lib/angular-route.min'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },

    'angular-route': {
      deps: ['angular']
    }

  }

});

require(['prueba'], function(prueba) {

  /*
    Start your app here
  */

  /*
    Keep this at the bottom of the function. More info at:
    https://github.com/tnajdek/angular-requirejs-seed/blob/master/app/js/main.js
  */
  angular.element().ready(function() {
      angular.resumeBootstrap();
  });
});
