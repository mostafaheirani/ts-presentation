import { ACTION_TYPES } from "./action-types";
import { Action, State } from "./type";

export const persistReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION_TYPES.SET_THEME:
      return { ...state, theme: action.payload };
    case ACTION_TYPES.SET_LOCALE:
      return { ...state, locale: action.payload };
  }
};
