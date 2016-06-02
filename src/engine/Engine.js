import Render from './Render';
import Action from './Action';

export default class Engine {
    constructor(options) {
        this.state = options['state'];
        this.RenderEngine = new Render(options['$root']);
        this.RenderEngine.setActionDispatch(new Action(options['dispatch']));
    }

    listenState(currentState) {
        this.state = currentState;
        this.render();
    }
    
    render() {
        this.RenderEngine.setState(this.state);
        
        let gameStatus = this.state['gameStatus'];

        switch(gameStatus) {
            case 'START':
                return this.RenderEngine.gameStartScreen();
            case 'RUN':
                return this.RenderEngine.gameRunScreen();
        }
    }
}