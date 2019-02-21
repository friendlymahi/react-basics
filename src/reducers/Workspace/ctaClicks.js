import actions from "../../actions/Workspace";

const defaultState = {userName:"", link:"", description:""}

export default (state = defaultState,action) =>
{
	switch(action.type)
	{
	case actions.CTA_CLICKED:
		return {...state,...action.payLoad};
	default:
		return state;
	}
};