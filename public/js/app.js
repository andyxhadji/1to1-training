window.app = angular.module('mean', ['$strap.directives', 'angular.directives-round-progress', 'ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.articles', 'mean.training']);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.training', []);