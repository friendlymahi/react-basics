import actions from "./";

export const setTextFilter = (textEntered = "") => ({type:actions.SET_TEXT_FILTER, payload:{filterText:textEntered}});
export const sortByDesc = () => ({type:actions.SORT_BY_DESC});

export const setStartDate = (startDate = undefined) => ({type:actions.SET_START_DATE, payload:{startDate:startDate}});
export const setEndDate = (endDate = undefined) => ({type:actions.SET_END_DATE, payload:{endDate:endDate}});
export const sortByDate = () => ({type:actions.SORT_BY_DATE});

export const sortByAmt = () => ({type:actions.SORT_BY_AMT});