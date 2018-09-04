import actions from "./../../actions/Expensify";

const defaultExpenseList = [
	/*{
		id:12345,
		description:"RoomRent",
		amt:21,
		createdAt:120
	},*/
];

export default (state = defaultExpenseList,action) =>
{
	switch(action.type)
	{
	case actions.ADD_EXPENSE:
		// return state.concat([{id:uuid()}]);
		return [...state,action.payload];
	case actions.REMOVE_EXPENSE:
		// return state.concat([{id:uuid()}]);
		return state.filter((expense)=>action.payload.id!==expense.id);
	case actions.EDIT_EXPENSE:
		return state.map((expense)=>action.payload.id!==expense.id?({...expense}):({...expense,description:action.payload.description,amt:action.payload.amt,createdAt:action.payload.createdAt}));
	default:
		return state;
	}
};