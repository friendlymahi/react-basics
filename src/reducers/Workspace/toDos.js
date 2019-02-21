import actions from "../../actions/Workspace";

const defaultToDoList = [
	/*{
		id:12345,
		description:"RoomRent",
		amt:21,
		createdAt:120
	},*/
];

export default (state = defaultToDoList,action) =>
{
	switch(action.type)
	{
	case actions.ADD_TO_MY_TODOS:
		// return state.concat([{id:uuid()}]);
		return [...state,action.payLoad];
	default:
		return state;
	}
};
