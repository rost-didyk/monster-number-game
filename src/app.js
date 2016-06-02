import { createStore } from 'redux';
import gameState, { initialState } from './state/reducers/main';
import Engine from './engine/Engine';

// Global styles
import './less/global.less';

let store = createStore(gameState, initialState);

let engine = new Engine({
    $root: document.getElementById('app'),
    state: store.getState(),
    dispatch: store.dispatch
});

store.subscribe(() =>
    engine.listenState(store.getState())
);

engine.render();

window.Engine = engine;






