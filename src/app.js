import './css/style.less';
require('font-awesome-webpack');

import angular from 'angular';
// import Angular2To1 from 'angular2to1';
import AngularUiRouter from 'angular-ui-router';
import AngularAnimate from 'angular-animate';
import AngularSanitize from 'angular-sanitize';
import AngularBootstrap from 'angular-ui-bootstrap';
/*eslint-disable */
import LocalStorageModule from 'angular-local-storage';
import slickCarousel from 'angular-slick-carousel';
/*eslint-enable */
import { AppComponent } from './app.component';

import Home from './components/pages/home';
import Edit from './components/pages/edit';
import SharedComponents from './components/shared';

const appName = 'fedx';

angular.module(appName, [
  // framework wide components
  AngularUiRouter,
  AngularAnimate,
  AngularSanitize,
  AngularBootstrap,
  'slickCarousel',

  // services
  'LocalStorageModule',

  // shared components
  SharedComponents,

  // ui-page-components
  Home,
  Edit
])
.config(config)
.component(AppComponent.selector, AppComponent);

/* @ngInject */
function config ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

  localStorageServiceProvider.setPrefix(appName);

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    })
    .state('aboutus', {
      url: '/aboutus',
      template: '<header-component></header-component>' + '<h1>About us</h1>'
    })
    .state('elements', {
      url: '/elements',
      template: '<header-component></header-component>' + '<h1>Hello Element</h1>'
    })
    .state('faq', {
      url: '/faq',
      template: '<header-component></header-component>' +  '<h1>FAQ</h1>'
    });

  $urlRouterProvider.otherwise('/');
}

angular.element(document).ready(() => {
  angular.bootstrap(document, [appName]);
});
