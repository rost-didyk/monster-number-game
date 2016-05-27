import BaseView from './BaseView';
import startScreenHtml from '../../templates/screens/start.html';

export default class StartScreenView extends BaseView{
    constructor() {
        super(startScreenHtml);

        let $el = this.htmlObject();

        let $btn = $el.querySelector('#js-start-game');

        $btn.addEventListener('click', function(){
            console.log('test-test');
        });

        return $el;
    }
}