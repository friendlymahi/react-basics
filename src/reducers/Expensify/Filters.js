import actions from "./../../actions/Expensify";

const defaultFilters = {
	sortBy:"amt",
	filterText:"",
	startDate:undefined,
	endDate:undefined
};

export default (state = defaultFilters,action) =>
{
	switch(action.type)
	{
	case actions.SORT_BY_AMT:
		return {...state,sortBy:"amt"};
	case actions.SORT_BY_DATE:
		return {...state,sortBy:"date"};
	case actions.SORT_BY_DESC:
		return {...state,sortBy:"desc"};
	case actions.SET_START_DATE:
		return {...state,startDate:action.payload.startDate};
	case actions.SET_END_DATE:
		return {...state,endDate:action.payload.endDate};
	case actions.SET_TEXT_FILTER:
		return {...state,filterText:action.payload.filterText};
	default:
		return state;
	}
};