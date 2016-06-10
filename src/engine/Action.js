export default class Action {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    start() {
        this.dispatch({
            type: 'GAME_STATUS_RUN'
        });
    }

    select(number) {
        this.dispatch({
            type: 'GAME_SELECT_NUMBER',
            number
        })
    }

    matched() {
        this.dispatch({
            type: 'GAME_NUMBER_MATCHED'
        })
    }

    fail() {
        this.dispatch({
            type: 'GAME_NUMBER_FAIL'
        })
    }

}