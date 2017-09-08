import './magicbox.less';
import template from './magicbox.html';

export let MagicboxComponent = {
  templateUrl: template,
  selector: 'magicbox',
  bindings: {},
  /* @ngInject */
  controller: class MagicboxCtrl {
    /* @ngInject */
    constructor() {
      // TODO - constructor arguments that should be available on "this"
      // should be added to the assign object
      this.title = 'FED-X';
      this.note = 'Angular 1.5x, Es6, Karma, Jasmine & Webpack, ui-router';
    }
  }
};
