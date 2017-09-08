import './carousel.less';
import template from './carousel.html';
import CarouselController from './carousel.controller';

export let CarouselComponent = {
  templateUrl: template,
  selector: 'carousel',
  bindings: {},
  controller: CarouselController
};
