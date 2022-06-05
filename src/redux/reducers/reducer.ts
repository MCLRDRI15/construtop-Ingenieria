import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";

import { IGlobalReducer, globalReducer } from "./global";

export interface IState {
  globalReducer: IGlobalReducer;
}

const combinedReducer = combineReducers({ globalReducer });

export const reducer = (state: IState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
