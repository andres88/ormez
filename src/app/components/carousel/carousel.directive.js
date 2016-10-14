(function() {
  'use strict';

  angular
    .module('lkxfjts')
    .directive('acmeCarousel', acmeCarousel);


  /** @ngInject */
  function acmeCarousel() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/carousel/carousel.html',
      scope: {
          creationDate: '='
      },
      controller: carouselController,
      controllerAs: 'vm',
      bindToController: true,
      replace: true

    };

    return directive;

    /** @ngInject */
    function carouselController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
