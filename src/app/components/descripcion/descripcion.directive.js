(function() {
  'use strict';

  angular
    .module('lkxfjts')
    .directive('acmeDescription', acmeDescription);


  /** @ngInject */
  function acmeDescription() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/descripcion/descripcion.html',
      scope: {
          creationDate: '='
      },
      controller: descriptionController,
      controllerAs: 'vm',
      bindToController: true,
      replace: true

    };

    return directive;

    /** @ngInject */
    function descriptionController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
