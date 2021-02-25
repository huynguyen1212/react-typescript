/*
*
* Kj reducers
* make by phamthainb
*/
import * as types from './constants';
import { ActionsKj, KjStore } from "./types";

const initState : KjStore = { };

const reducersKj = (state = initState, actions: ActionsKj) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersKj;