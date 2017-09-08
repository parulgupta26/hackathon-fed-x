import angular from 'angular';
import { MagicboxComponent } from './magicbox/magicbox.component';

const SharedComponents = angular.module('sharedComponents', [])
                                .component('magicbox', MagicboxComponent);

export default SharedComponents.name;