import { combineReducers } from "redux";
import ctaClicks from "./ctaClicks";
import toDos from "./toDos";

export default combineReducers({
	ctaClicks: ctaClicks,
	toDos:toDos
});