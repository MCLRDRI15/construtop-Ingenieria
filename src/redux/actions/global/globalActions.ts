import { AnyAction } from "redux";

export const SET_PROJECT_OR_PERSON_FOR_EDIT = "SET_PROJECT_OR_PERSON_FOR_EDIT";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const SET_MODAL_VIEW = "SET_MODAL_VIEW";

export const setProjectOrPersonForEdit = (item: any): AnyAction => ({
  type: SET_PROJECT_OR_PERSON_FOR_EDIT,
  payload: { item },
});

export const toggleModal = (): AnyAction => ({
  type: TOGGLE_MODAL,
  payload: {},
});

export const setModalView = (view: string): AnyAction => ({
  type: SET_MODAL_VIEW,
  payload: { view },
});
