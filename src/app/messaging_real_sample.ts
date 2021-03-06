import { AppState, AddMessageAction, DeleteMessageAction, MessageActions } from './messaging';

import {
    Action,
    Reducer,
    Store,
    createStore
} from 'redux';

const initialState: AppState = { messages: [] };

const real_reducer: Reducer<AppState> = (state: AppState = initialState, action: Action) => {
    switch(action.type)
    {
        case 'ADD_MESSAGE':
            return {
                messages: state.messages.concat(
                    (<AddMessageAction>action).message
                ),
        };
        case 'DELETE_MESSAGE':
            const idx = (<DeleteMessageAction>action).index;
            return {
                messages: [
                    ...state.messages.slice(0,idx),
                    ...state.messages.slice(idx + 1, state.messages.length)
                ]
            };
    }
}

const store: Store<AppState> = createStore<AppState>(real_reducer);

console.log(store.getState()); // -> { messages: [] }

store.dispatch( MessageActions.addMessage('trala'));
store.dispatch( MessageActions.addMessage('hejsan'));
store.dispatch(MessageActions.addMessage('tja'));

console.log(store.getState());

