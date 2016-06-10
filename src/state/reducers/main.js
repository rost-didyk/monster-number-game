import { combineReducers } from 'redux';
import _ from 'lodash';

export const initialState = {
    gameStatus: 'START', // 'START', 'RUN', 'STOP',
    logic: {
        setting: {
            maxNumber: 10
        },
        levelNumber:1,
        neededNumber: null,
        matched: 1 // enum{1,2,3} 1 - start, 2 - matching, 3 - not matching
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
        case 'GAME_SELECT_NUMBER':
            let matched = state['neededNumber'] == action['number'] ? 2 : 3;
            return Object.assign({},state, {
                matched
            });
        case 'GAME_NUMBER_MATCHED':
            return Object.assign({},state, {
                matched: 1,
                levelNumber: ++state['levelNumber'],
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