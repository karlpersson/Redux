const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

import {
    Reducer,
    Action,
    ActionCreator,
    Store,
    createStore,
    StoreEnhancer,
    compose
} from 'redux';

import { AppStore } from './app-store';


export interface AppState {
  counter: number;
};

const initialState: AppState = { counter: 0 };

const counterReducer: Reducer<AppState> = (state: AppState = initialState, action: Action): AppState => {
    switch(action.type){
        case INCREMENT:
            return Object.assign({}, state, {counter: state.counter + 1});
        case DECREMENT:
            return Object.assign({}, state, {counter: state.counter - 1});
        default:
            return state;
    }
}

export const increment: ActionCreator<Action> = () => ({ type: INCREMENT});
export const decrement: ActionCreator<Action> = () => ({ type: DECREMENT});

let store: Store<AppState> = createStore<AppState>(counterReducer);

const devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
    return createStore<AppState>(
        counterReducer,
        compose(devtools)
    );
}

export const appStoreProviders = { provide: AppStore, useFactory: createAppStore}