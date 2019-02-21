import {call} from "redux-saga/effects";

const trackMyCalls = () => {console.log("Hello World !!")}

export default function* () {
    yield call(trackMyCalls)
}