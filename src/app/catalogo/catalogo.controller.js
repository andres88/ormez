(function() {
  'use strict';

  angular
    .module('lkxfjts')
    .controller('CatalogoController', catalogoController);

  /** @ngInject */
  function catalogoController($scope, $timeout, webDevTec, toastr) {
    var vm = this;
    $scope.products = [
      {
        img: 'assets/images/productos/converse.png',
        modelName: 'sukun',
        description: 'askdhañlksjdñlakjsdajsdlkajsdkjasd'
      },
      {
        img: 'assets/images/productos/converse2.png',
        modelName: 'sukun 2',
        description: 'askdhañlksjdñlakjsdajsdlkajsdkjasd'
      }
    ];

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1445900016664;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    $(".modal").each(function(index) {
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
})();
