import { combineReducers } from 'redux';
import _ from 'lodash';

export const initialState = {
    gameStatus: 'START', // 'START', 'RUN', 'STOP',
    logic: {
        setting: {
            maxNumber: 10
        },
        neededNumber: null,
        matched: null
    }
};

function gameStatus(state = [], action) {
    switch (action.type) {
        case 'GAME_STATUS_RUN':
            return 'RUN';
        default:
            return state;
    }
}

function logic(state = [], action) {
    switch (action.type) {
        case 'GAME_STATUS_RUN':
            return Object.assign({},state, {
                neededNumber: _.random(1, state['setting']['maxNumber'])
            });
        default:
            return state;
    }
}


const gameState = combineReducers({
    gameStatus,
    logic
});

export default gameState;