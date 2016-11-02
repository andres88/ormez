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
        img: 'assets/images/productos/1.png',
        modelName: ' 1',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank mezcli"></i></p>'
      },
      {
        img: 'assets/images/productos/2.png',
        modelName: ' 2',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank mezcli"></i></p>'
      },
      {
        img: 'assets/images/productos/3.png',
        modelName: ' 3',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank negro"></i><i class="mdi mdi-checkbox-blank gin"></i><i class="mdi mdi-checkbox-blank blanco"></i></p>'
      },
      {
        img: 'assets/images/productos/4.png',
        modelName: ' 4',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank aqua"></i></p>'
      },
      {
        img: 'assets/images/productos/5.png',
        modelName: ' 5',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank negro"></i></p>'
      },
      {
        img: 'assets/images/productos/6.png',
        modelName: ' 6',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank mezcli"></i></p>'
      },
      {
        img: 'assets/images/productos/7.png',
        modelName: ' 7',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank negro"></i></p>'
      },
      {
        img: 'assets/images/productos/8.png',
        modelName: ' 8',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank negro"></i></p>'
      },
      {
        img: 'assets/images/productos/9.png',
        modelName: ' 9',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank gin"></i><i class="mdi mdi-checkbox-blank marino"></i></p>'
      },
      {
        img: 'assets/images/productos/10.png',
        modelName: ' 10',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank marino"></i></p>'
      },
      {
        img: 'assets/images/productos/11.png',
        modelName: ' 11',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank navy"></i></p>'
      },
      {
        img: 'assets/images/productos/12.png',
        modelName: ' 12',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank negro"></i></p>'
      },
      {
        img: 'assets/images/productos/13.png',
        modelName: ' 13',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank blanco"></i><i class="mdi mdi-checkbox-blank marino"></i><i class="mdi mdi-checkbox-blank negro"></i></p>'
      },
      {
        img: 'assets/images/productos/14.png',
        modelName: ' 14',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank negro"></i></p>'
      },
      {
        img: 'assets/images/productos/15.png',
        modelName: ' 15',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank negro"></i></p>'
      },
      {
        img: 'assets/images/productos/16.png',
        modelName: ' 16',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank negro"></i></p>'
      },
      {
        img: 'assets/images/productos/17.png',
        modelName: ' 17',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank gin"></i></p>'
      },
      {
        img: 'assets/images/productos/18.png',
        modelName: ' 18',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank verde"></i><i class="mdi mdi-checkbox-blank rosa"></i></p>'
      },
      {
        img: 'assets/images/productos/19.png',
        modelName: ' 19',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank gray"></i><i class="mdi mdi-checkbox-blank rosa"></i><i class="mdi mdi-checkbox-blank gin"></i><i class="mdi mdi-checkbox-blank red"></i></p>'
      },
      {
        img: 'assets/images/productos/20.png',
        modelName: ' 20',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank negro"></i></p>'
      },
      {
        img: 'assets/images/productos/21.png',
        modelName: ' 21',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank gin"></i></p>'
      },
      {
        img: 'assets/images/productos/22.png',
        modelName: ' 22',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank blanco"></i><i class="mdi mdi-checkbox-blank negro"></i><i class="mdi mdi-checkbox-blank rosa"></i></p>'
      },
      {
        img: 'assets/images/productos/23.png',
        modelName: ' 23',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank negro"></i></p>'
      },
      {
        img: 'assets/images/productos/24.png',
        modelName: ' 24',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank negro"></i></p>'
      },
      {
        img: 'assets/images/productos/25.png',
        modelName: ' 25',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank negro"></i></p>'
      },
      {
        img: 'assets/images/productos/26.png',
        modelName: ' 26',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank mescli"></i></p>'
      },
      {
        img: 'assets/images/productos/27.png',
        modelName: ' 27',
        description: '<p class="description">Colores disponiles: <i class="mdi mdi-checkbox-blank verde"></i><i class="mdi mdi-checkbox-blank rosa"></i></p>'
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


    $(".modalCatalogo").each(function(index) {
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
