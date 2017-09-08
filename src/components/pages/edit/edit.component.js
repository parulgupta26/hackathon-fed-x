import './edit.less';
import template from './edit.html';

export let EditComponent = {
  templateUrl: template,
  selector: 'edit',
  bindings: {},
  /* @ngInject */
  controller: class EditCtrl {
    /* @ngInject */
    constructor($state) {
      // TODO - constructor arguments that should be available on "this"
      // should be added to the assign object
      Object.assign(this, { $state });
      this.title = 'FED-X';
      this.note = 'Angular 1.5x, Es6, Karma, Jasmine & Webpack, ui-router';
    }
  }
};
