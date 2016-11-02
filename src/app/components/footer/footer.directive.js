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

      $(".modalUbicacion").each(function(index) {
        $(this).on('show.bs.modal', function(e) {
          var open = $(this).attr('data-easein');
          if (open == 'shake') {
            $('.modal-dialog').velocity('callout.' + open);
          } else if (open == 'pulse') {
            $('.modal-dialog').velocity('callout.' + open);
          } else if (open == 'tada') {
            $('.modal-dialog').velocity('callout.' + open);
          } else if (open == 'flash') {
            $('.modal-dialog').velocity('callout.' + open);
          } else if (open == 'bounce') {
            $('.modal-dialog').velocity('callout.' + open);
          } else if (open == 'swing') {
            $('.modal-dialog').velocity('callout.' + open);
          } else {
            $('.modal-dialog').velocity('transition.' + open);
          }

        });
      });


    }
  }

})();
