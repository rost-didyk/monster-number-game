import StartScreenView from './views/StartScreenView';
import RunScreenView from './views/RunScreenView';

export default class Render {
    constructor($root) {
        this.$root = $root;
        this.ActionDispatch = null;
        this.state = [];
    }

    setActionDispatch(Action) {
        this.ActionDispatch = Action;
    }

    getActionDispatch() {
        return this.ActionDispatch;
    }

    setState(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    gameStartScreen() {
        let View = new StartScreenView({
            dispatch: this.getActionDispatch(),
            state: this.getState()
        });

        this.$root.innerHTML = '';

        this.$root.appendChild(View.$el);
    }

    gameRunScreen() {
        let View = new RunScreenView({
            dispatch: this.getActionDispatch(),
            state: this.getState()
        });

        this.$root.innerHTML = '';

        this.$root.appendChild(View.$el);
    }
}