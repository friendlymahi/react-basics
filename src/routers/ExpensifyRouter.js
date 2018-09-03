import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ExpensifyDashboard from "../components/Expensify/Dashboard";
import AddExpense from "../components/Expensify/AddExpense";
import EditExpense from "../components/Expensify/EditExpense";
import Help from "../components/Expensify/Help";
import PageNotFound from "../components/Expensify/PageNotFound";
import Header from "../components/Expensify/Layout/Header";

//import Playground from "./../components/Utilities/redux-101";
// import Playground from "./../components/Utilities/destructuring";

import { createStore } from "redux";
import expensifyReducer from "./../reducers/Expensify";
import {addExpense, removeExpense, editExpense} from "./../actions/Expensify/Expenses";
import { sortByAmt, sortByDesc, setTextFilter, sortByDate, setStartDate, setEndDate} from "./../actions/Expensify/Filters";

const store = createStore(expensifyReducer);

console.log(store.getState());

const getExpensesForDisplay = (expenses, {filterText = "", sortBy ="date", startDate, endDate} = {}) => {
	console.log(sortBy);
	const newExpenses = filterText?expenses.filter((expense) => expense.description.includes(filterText)):[...expenses];

	switch(sortBy)
	{
	case "amt": return newExpenses.sort((a,b)=>a.amt-b.amt);
	case "desc": return newExpenses.sort((a,b)=>(a.description.toLowerCase()<b.description.toLowerCase())?-1:1);
	case "date": return newExpenses;
	default: return newExpenses;
	}
};

const unsubscribe = store.subscribe((state = store.getState())=>{
	console.log(getExpensesForDisplay(state.expenses,state.filters));
});

const actionForExpense1 = store.dispatch(addExpense());
const actionForExpense2 = store.dispatch(addExpense());
//store.dispatch(removeExpense(actionForExpense1.payload));
store.dispatch(editExpense(actionForExpense2.payload.id, "CatelynMoney", 15));
// store.dispatch(setTextFilter("Reno"));
store.dispatch(setStartDate(1));
store.dispatch(setEndDate(12));
store.dispatch(sortByDesc());

export default
<div>
	<BrowserRouter>
		<div>
			<Header />
			<center>
				<Switch>
					<Route path="/" component={ExpensifyDashboard} exact />
					<Route path="/create" component={AddExpense} exact />
					<Route path="/edit/:id" component={EditExpense} />
					<Route path="/help" component={Help} />
					{
						/*
					<Route path="/playground" component={Playground} />
					*/
					}
					<Route component={PageNotFound} />
				</Switch>
			</center>
		</div>
	</BrowserRouter>
</div>
;