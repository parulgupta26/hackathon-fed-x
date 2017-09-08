import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { EditComponent } from './edit.component';

export * from './edit.component';

export default angular.module('edit', [
  uiRouter
])
  .config(config)
  .component(EditComponent.selector, EditComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('home', {
  //         url: '/home',
  //         template: '<other></other>'
  //     });
}
