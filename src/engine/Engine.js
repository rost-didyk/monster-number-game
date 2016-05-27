import Render from './service/Render';

export default class Engine {
    constructor(options) {
        this.state = options['state'];
        this.dispatch = options['dispatch'];
        this.renderEngine = new Render(options['$canvas']);
    }

    listenState(currentState) {
        this.state = currentState;
        this.render();
    }
    
    render() {
        let gameStatus = this.state['gameStatus'];
        switch(gameStatus) {
            case 'START':
                return this.renderEngine.gameStartScreen();
            case 'STOP':
                return this.renderEngine.gameStopScreen();
            case 'RUN':
                return this.renderEngine.gameRunScreen();
        }
    }
}