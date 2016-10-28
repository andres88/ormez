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
      $scope.contact = {};
      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
      vm.send = function(contact, contactForm){
        $http({
          url: 'http://localhost:3000/app/components/contacto/email.json',
          data: contact
        }).success(function (res) {
          alert(res.status);
          $scope.contact = {};
          contactForm.$setPristine();
        })
      };

    vm.validateEmail = function (email) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
      }
    }
  }

})();
