import { Store } from './store';
import { message_reducer, AddMessageAction, AppState, MessageActions } from './messaging'

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



store.dispatch(MessageActions.addMessage("some text"));
store.dispatch(MessageActions.addMessage("more text"));
store.dispatch(MessageActions.addMessage("final text"));

console.log(store.getState());