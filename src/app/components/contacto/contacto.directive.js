(function() {
  'use strict';

  angular
    .module('lkxfjts')
    .directive('acmeContacto', acmeContacto);


  /** @ngInject */
  function acmeContacto() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/contacto/contacto.html',
      scope: {
          creationDate: '='
      },
      controller: contactoController,
      controllerAs: 'vm',
      bindToController: true,
      replace: true

    };

    return directive;

    /** @ngInject */
    function contactoController($scope, moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();




    }
  }

})();
