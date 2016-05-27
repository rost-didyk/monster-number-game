import { createStore } from 'redux';
import gameState from './state/reducers/main';
import Engine from './engine/Engine';

let store = createStore(gameState);

let engine = new Engine({
    $canvas: document.getElementById('app'),
    state: store.getState(),
    dispatch: store.dispatch
});

store.subscribe(() =>
    engine.listenState(store.getState())
);

engine.render();

window.Engine = engine;






