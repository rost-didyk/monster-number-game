export default class Action {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    start() {
        console.log('start');
    }
}