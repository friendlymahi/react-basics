import React from "react";

import { createStore } from "redux";

// Action Generators

const incrementCount =({incrementBy = 2} = {}) =>({
	type:"INCREMENT",
	incrementBy   
});

const decrementCount =({decrementBy = 1} = {}) =>({
	type:"DECREMENT",
	decrementBy   
});

const resetCount =() =>({
	type:"RESET"
});

const setCount =({count=1} ={}) =>({
    type:"SET",
    count
});

const store = createStore((state ={count:0},action) => {
	// console.log("store created/updated");
	switch(action.type)
	{
	case "INCREMENT":return {count:state.count+action.incrementBy};
	case "DECREMENT":return {count:state.count-action.decrementBy};
    case "RESET":return {count: 0};
    case "SET":return {count:action.count};
	default: return state;
	}
});

const unsubscribe = store.subscribe(()=>{
	console.log("Subscribed. Cur state",store.getState());
});
// console.log(store.getState());

// Actions
store.dispatch(incrementCount({incrementBy:3}));

store.dispatch(decrementCount({decrementBy:3}));

store.dispatch(setCount({count:55}));

unsubscribe();

store.dispatch(resetCount());

console.log(store.getState());

export default  () => <div>This is Redux Playground file. At this time state is {JSON.stringify(store.getState())}</div>;