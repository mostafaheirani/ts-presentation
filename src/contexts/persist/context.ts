import { Dispatch, createContext } from "react";
import { Action, State } from "./type";
import { initialState } from "./initial-state";

export const PersistContext = createContext<[State, Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const PersistContextProvider = PersistContext.Provider;
