export interface Action {
    type: string;
    payload?: any;
  }

  export type Reducer<T> = (state: T, action: Action) => T;

 // let reducer: Reducer<number> = (state: number, action: Action) => {
 //    return state;
 // }

 /*let reducer: Reducer<number> = (state: number, action: Action) => {
  if(action.type === 'INCREMENT')
  {
     return state + 1;
  }
  if(action.type === 'DECREMENT')
  {
      return state - 1;
  }
  return state;
 }*/

const reducer: Reducer<number> = (state: number, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'PLUS':
      return state + action.payload;
    default:
      return state;

  }
};

// console.log( reducer(0,null));

// .\node_modules\.bin\ts-node ./src/app/reducer.ts

const incrementAction: Action = { type: 'INCREMENT'};
console.log( reducer(0, incrementAction )); // -> 1
console.log( reducer(1, incrementAction )); // -> 2

const decrementAction: Action = { type: 'DECREMENT'};

console.log( reducer(100, decrementAction )); // -> 99

// any other action just returns the input state
const unknownAction: Action = { type: 'UNKNOWN' };
console.log(reducer(100, unknownAction)); // -> 100

const plusSevenAction = {type: 'PLUS', payload: 7};

console.log( reducer(2, plusSevenAction)); // -> 9
console.log( reducer(3, { type: 'PLUS', payload: 7}) );    // -> 10
console.log( reducer(3, { type: 'PLUS', payload: 9000}) ); // -> 9003
console.log( reducer(3, { type: 'PLUS', payload: -2}) );   // -> 1
