import { createStore, applyMiddleware, Store } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { IState, reducer } from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(middleware));
  }
  return applyMiddleware(middleware);
};

const makeStore = (context: Context) =>
  createStore(reducer, bindMiddleware(thunkMiddleware));

export const wrapper = createWrapper<Store<IState>>(makeStore, { debug: true });
