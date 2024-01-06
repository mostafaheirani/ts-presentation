import locales from "../../locales";
import { ACTION_TYPES } from "./action-types";

export type Themes = "dark" | "light";

export type Locale = (typeof locales)[number]["locale"];

export interface State {
  theme: Themes;
  locale: Locale;
}

export type Action =
  | { type: ACTION_TYPES.SET_LOCALE; payload: Locale }
  | { type: ACTION_TYPES.SET_THEME; payload: Themes };
