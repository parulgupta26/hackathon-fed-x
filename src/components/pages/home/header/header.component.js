import './header.less';
import template from './header.html';

export let HeaderComponent = {
  templateUrl: template,
  selector: 'headerComponent',
  bindings: {},
  controller: class HeaderCtrl {
    constructor($state) {
      this.title = 'FED-X header';
      this.$state = $state;     
    }
    navigate(state) {
      this.$state.go(state);
    }
  }
};
