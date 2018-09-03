import { combineReducers } from "redux";
import expensesReducer from "./Expenses";
import filtersReducer from "./Filters";

export default combineReducers({
	expenses: expensesReducer,
	filters: filtersReducer
});