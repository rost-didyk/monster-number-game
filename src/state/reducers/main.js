import { combineReducers } from 'redux'

function gameStatus(state = 'START', action) {
    switch (action.type) {
        case 'GAME_STATUS_RUN':
            return 'RUN';
        default:
            return state
    }
}

const gameState = combineReducers({
    gameStatus
});

export default gameState;