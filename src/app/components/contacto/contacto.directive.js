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
    function contactoController($scope, moment, $http) {
      var vm = this;
      $scope.messageOk = false;
      $scope.contact = {};

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
      vm.send = function(contact, contactForm){
        $http({
          method: 'POST',
          url: '/server/enviar.php',
          data: contact,
          transformRequest: function(obj) {
              var str = [];
              for(var p in obj)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              return str.join("&");
          },
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        }).success(function (res) {
          $scope.messageOk = true;
          $scope.contact = {};
          contactForm.$setPristine();
        })
      };

      $scope.hideAlert = function(){
          $scope.messageOk = false;
      };

    vm.validateEmail = function (email) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
      }

      $(".modalContacto").each(function(index) {
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
