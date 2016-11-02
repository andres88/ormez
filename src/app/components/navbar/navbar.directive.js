(function() {
  'use strict';

  angular
    .module('lkxfjts')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      link: NavbarController,
      replace: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope, element) {
      // var a = $('.animateB');
      // $('[ui-sref]').click(function () { var ancho = $(this).width();var left = $(this).position().left;a.css({left:left+'px',width:ancho+'px'}) })
      //
      // var container = angular.element(document);
      // container.on('scroll', function() {
      //     if (container.scrollTop() > 100) {
      //         element.addClass('affix');
      //     } else {
      //         element.removeClass('affix');
      //     }
      // });
      $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });

        // $(window).scroll(function() {
        //     if ($(".navbar").offset().top > 50) {
        //         $(".navbar-fixed-top").addClass("top-nav-collapse");
        //     } else {
        //         $(".navbar-fixed-top").removeClass("top-nav-collapse");
        //     }
        // });

    }
  }



})();
