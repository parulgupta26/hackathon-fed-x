import './profile.less';
import template from './profile.html';

export let ProfileComponent = {
  templateUrl: template,
  selector: 'profile',
  bindings: {
    profileName: '@',
    profileTitle: '@',
    profilePic: '@'
  },
  /* @ngInject */
  controller: class ProfileCtrl {
    /* @ngInject */
    constructor() {
      // TODO - constructor arguments that should be available on "this"
      // should be added to the assign object
      this.name = 'profile name';      
    }
  }
};
