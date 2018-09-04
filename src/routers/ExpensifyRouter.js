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

const getExpensesForDisplay = (expenses, {filterText = "", sortBy ="date", startDate = undefined, endDate = undefined} = {}) => {
	console.log(sortBy);
	let newExpenses = filterText?expenses.filter((expense) => expense.description.toLowerCase().includes(filterText.toLowerCase())):[...expenses];

	newExpenses = newExpenses.filter((expense) => (typeof startDate === "number"?expense.createdAt >= startDate:true) && (typeof endDate === "number"? expense.createdAt<=endDate:true));

	switch(sortBy)
	{
	case "amt": return newExpenses.sort((a,b)=>a.amt-b.amt);
	case "desc": return newExpenses.sort((a,b)=>(a.description.toLowerCase()<b.description.toLowerCase())?-1:1);
	case "date": return newExpenses.sort((a,b)=>a.createdAt-b.createdAt);
	default: return newExpenses;
	}
};

const unsubscribe = store.subscribe((state = store.getState())=>{
	console.log(getExpensesForDisplay(state.expenses,state.filters));
});

const actionForExpense1 = store.dispatch(addExpense('Expense 1',200,120));
const actionForExpense2 = store.dispatch(addExpense('Expense 2',300,120));
store.dispatch(removeExpense(actionForExpense1.payload));
store.dispatch(editExpense(actionForExpense2.payload.id, "CatelynExpenses", 300, 120));
store.dispatch(addExpense('OtherExpense',300,200));
store.dispatch(addExpense('Expense 3',350,150));
store.dispatch(addExpense("EveExpenses",500,175));
store.dispatch(setTextFilter("expense"));
store.dispatch(sortByDesc());
store.dispatch(setStartDate(150));
store.dispatch(setEndDate(200));
store.dispatch(sortByDate());

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