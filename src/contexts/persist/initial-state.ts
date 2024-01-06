import locales from "../../locales";
import { State } from "./type";

export const initialState: State = {
  theme: "light",
  locale: locales[0].locale,
};
