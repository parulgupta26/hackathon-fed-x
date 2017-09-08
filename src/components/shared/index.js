import angular from 'angular';
import { MagicboxComponent } from './magicbox/magicbox.component';
import { ProfileComponent } from './profile/profile.component';

const SharedComponents = angular.module('sharedComponents', [])
                                .component('magicbox', MagicboxComponent)
                                .component('profile', ProfileComponent);

export default SharedComponents.name;