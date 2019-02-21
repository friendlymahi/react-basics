import actions from ".";

export const invokeCTA = (description ="Default Desc", link = "#", userName = null) =>
	({type:actions.ADD_EXPENSE,
		payLoad: {
			userName,
			description,
			link
		}});

	export const addToMyToDo = (description ="Default Desc", eventId = "") =>
	({type:actions.ADD_TO_MY_TODOS,
		payLoad: {
			eventId,
			description
		}});
		