/*
*
* Kj selecters
* make by phamthainb
*/
import rootReducer from "src/redux/root-reducers";

export const selectKjStore = ((state: ReturnType<typeof rootReducer>) => state.reducersKj)