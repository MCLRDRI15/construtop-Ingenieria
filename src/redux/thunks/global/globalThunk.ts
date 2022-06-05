import { AnyAction, Dispatch } from "redux";

export const onDispatchMultipleActions = (actions: AnyAction[] | any) => {
  return async (dispatch: Dispatch): Promise<void | void> => {
    actions.map((a) => dispatch(a));
  };
};
