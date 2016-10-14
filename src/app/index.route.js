(function() {
  'use strict';

  angular
    .module('lkxfjts')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('catalogo', {
        url: '/catalogo',
        templateUrl: 'app/catalogo/catalogo.html',
        controller: 'CatalogoController',
        controllerAs: 'catalogo'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
