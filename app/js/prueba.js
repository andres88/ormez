define(['angular', 'angular-route'], function(angular) {
  var prueba = angular.module('prueba', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

  prueba.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/home.html'
    });
  });

  prueba.controller('test', function ($scope, $uibModal) {
    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    };
  });

  prueba.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
    var $ctrl = this;
    $ctrl.items = items;
    $ctrl.selected = {
      item: $ctrl.items[0]
    };

    $ctrl.ok = function () {
      $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });


});
