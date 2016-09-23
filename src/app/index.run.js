(function() {
  'use strict';

  angular
    .module('lkxfjts')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
