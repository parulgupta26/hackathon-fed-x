import './header.less';
import template from './header.html';

export let HeaderComponent = {
  templateUrl: template,
  selector: 'headerComponent',
  bindings: {},
  /* @ngInject */
  controller: class HeaderCtrl {
    /* @ngInject */
    constructor() {
      // TODO - constructor arguments that should be available on "this"
      // should be added to the assign object
      this.title = 'FED-X header';      
    }
  }
};
