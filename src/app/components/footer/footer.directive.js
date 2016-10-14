(function() {
  'use strict';

  angular
    .module('lkxfjts')
    .directive('acmeFooter', acmeFooter);


  /** @ngInject */
  function acmeFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
          creationDate: '='
      },
      controller: footerController,
      controllerAs: 'vm',
      bindToController: true,
      replace: true

    };

    return directive;

    /** @ngInject */
    function footerController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
