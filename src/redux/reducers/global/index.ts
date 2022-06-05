import { globalReducer } from "./globalReducer";

export type IGlobalReducer = {
  item: any;
  isOpen: boolean;
  modalView: string;
};

export { globalReducer };
