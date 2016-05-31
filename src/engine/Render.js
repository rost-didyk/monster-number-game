import StartScreenView from './views/StartScreenView';

export default class Render {
    constructor($root) {
        this.$root = $root;
        this.ActionDispatch = null;
    }

    setActionDispatch(Action) {
        this.ActionDispatch = Action;
    }

    getActionDispatch() {
        return this.ActionDispatch;
    }

    gameStartScreen() {
        let View = new StartScreenView({
            dispatch: this.getActionDispatch()
        });

        this.$root.appendChild(View.$el);
    }
}