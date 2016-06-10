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

    events() {
        return {
            'click .js-select-number': 'selectNumber',
            'click .js-matched-success': 'matched',
            'click .js-matched-fail': 'fail'
        }
    }

    selectNumber(e) {
        let data = e.target.dataset;
        let number = data['number'];
        this.dispatchAction('select',number);
    }

    matched() {
        this.dispatchAction('matched');
    }

    fail() {
        this.dispatchAction('fail');
    }

}