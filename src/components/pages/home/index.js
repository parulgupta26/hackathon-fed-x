import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { HomeComponent } from './home.component';
import { HeaderComponent} from './header/header.component';

export * from './home.component';

export default angular.module('home', [
  uiRouter
])
  .config(config)
  .component(HomeComponent.selector, HomeComponent)
  .component(HeaderComponent.selector, HeaderComponent)
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
