import StartScreenView from './views/StartScreenView';

export default class Render {
    constructor($root) {
        this.$root = $root;
    }

    gameStartScreen() {
        let View = new StartScreenView('test');
        this.$root.appendChild(View);
    }
}