import BaseView from './BaseView';
import html from '../../html/screens/game.html';
import '../../less/screens/game.less';

export default class RunScreenView extends BaseView {
    constructor(options) {

        let template = {
            html,
            data: options['state']
        };

        super(template, options);
    }

    events() {}

}