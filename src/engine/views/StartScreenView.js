import BaseView from './BaseView';
import startScreenHtml from '../../html/screens/start.html';
import '../../less/screens/start.less';

export default class StartScreenView extends BaseView {
    constructor(options) {

        let template = {
            html: startScreenHtml,
            data:[]
        };

        super(template, options);
    }
    
    events() {
        return {
            'click .js-start-game': 'startGame'
        }
    }

    startGame(e) {
        this.dispatchAction('start');
        return false;
    }

}