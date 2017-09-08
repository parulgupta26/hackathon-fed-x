import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { HomeComponent } from './home.component';
import { JudgePanelComponent } from './judgepanel/judgepanel.component';
import { CarouselPanelComponent } from './carouselpanel/carouselpanel.component';

export * from './home.component';

export default angular.module('home', [
  uiRouter
])
  .config(config)
  .component(HomeComponent.selector, HomeComponent)
  .component(JudgePanelComponent.selector, JudgePanelComponent)
  .component(CarouselPanelComponent.selector, CarouselPanelComponent)
.name;

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('home', {
  //         url: '/home',
  //         template: '<other></other>'
  //     });
}
