import uuid from "uuid";
import actions from "./";

export const addExpense = (description ="Default Desc", amt = 10) =>
	({type:actions.ADD_EXPENSE,
		payload: {
			id:uuid(),
			description,
			amt
		}});
        
export const removeExpense = ({id = 0} = {}) =>
	({type:actions.REMOVE_EXPENSE,
		payload: {
			id
		}});        

export const editExpense = (id = 0, description="Unknown",amt = 0) =>
	({type:actions.EDIT_EXPENSE,
		payload: {
			id,
			description,
			amt
		}});