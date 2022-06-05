import { AnyAction } from "redux";
import { IGlobalReducer } from ".";

import {
  SET_MODAL_VIEW,
  SET_PROJECT_OR_PERSON_FOR_EDIT,
  TOGGLE_MODAL,
} from "../../actions/global/globalActions";

export const initialState: IGlobalReducer = {
  item: {},
  isOpen: false,
  modalView: "",
};

export const globalReducer = (
  state: IGlobalReducer = initialState,
  action: AnyAction
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PROJECT_OR_PERSON_FOR_EDIT: {
      const { item: itemProject }: { item: any } = payload;
      return {
        ...state,
        item: { ...itemProject },
      };
    }
    case TOGGLE_MODAL: {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }
    case SET_MODAL_VIEW: {
      const { view }: { view: string } = payload;
      return {
        ...state,
        modalView: view,
      };
    }
    default:
      return state;
  }
};
