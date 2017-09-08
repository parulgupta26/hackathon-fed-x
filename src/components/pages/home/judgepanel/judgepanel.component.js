import './judgepanel.less';
import template from './judgepanel.html';
//import JudgePanelController from './judgepanel.controller';

export let JudgePanelComponent = {
  templateUrl: template,
  selector: 'judgePanel',
  bindings: {},
  controller: class JudgePanelController {
    constructor() {
        this.profiles = [{
            name: 'Lorem Ipsum',
            title: 'FE Developer',
            path: '/assets/profile1.png'
        },
        {
            name: 'Lorem Ipsum',
            title: 'Visual Designer',
            path: '/assets/profile2.png'
        },
        {
            name: 'Lorem Ipsum',
            title: 'Visual Designer',
            path: '/assets/profile3.png'
        },
        {
            name: 'Lorem Ipsum',
            title: 'FE Developer',
            path: '/assets/profile4.png'
        }];
    }
}
};
