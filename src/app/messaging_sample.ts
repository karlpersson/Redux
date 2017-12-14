import { Store } from './store';
import { message_reducer, AddMessageAction, AppState } from './messaging'

let store = new Store<AppState>(message_reducer, {messages: []});
console.log(store.getState()); // -> { messages: [] }

store.dispatch(
    {
        type: 'ADD_MESSAGE',
        message: 'Would you say the firnge was made of silk?'
    } as AddMessageAction
);

store.dispatch({
    type: 'ADD_MESSAGE',
    message: 'Wouldnt have no other kind but silk'
} as AddMessageAction);

store.dispatch({
    type: 'ADD_MESSAGE',
    message: 'Has it really got a team of snow white horses?'
} as AddMessageAction );

console.log(store.getState());