import angular from 'angular';

angular.module('fedx')
    .config(config);

/* @ngInject */
function config ($compileProvider) {
	$compileProvider.debugInfoEnabled(false);
}
