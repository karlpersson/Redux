import {Action, Reducer} from './reducer';

export interface AppState {
    messages: string[];
}

export interface AddMessageAction extends Action {
    message: string;
}

export interface DeleteMessageAction extends Action {
    index: number;
  }

export let message_reducer: Reducer<AppState> = (state: AppState, action: Action): AppState => {
    switch (action.type) {
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
                    ...state.messages.slice(0, idx),
                    ...state.messages.slice(idx + 1, state.messages.length)
                ]
            };

    }

};

export class MessageActions {
    static addMessage(message: string): AddMessageAction {
        return {
            type: 'ADD_MESSAGE',
            message: message
        };
    }
    static deleteMessage(index: number): DeleteMessageAction {
        return {
            type: 'DELETE_MESSAGE',
            index: index
        };

    }


}
