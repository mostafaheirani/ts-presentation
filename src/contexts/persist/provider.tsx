import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { initialState } from "./initial-state";
import { PersistContextProvider } from "./context";
import { persistReducer } from "./reducer";
import { STORAGE_KEYS } from "../../constant";
import { getParsedValue } from "../../utils";
import { State } from "./type";

const cachedData = getParsedValue(
  localStorage.getItem(STORAGE_KEYS.PERSIST_STORAGE)
) as State | undefined;

const PersistProvider: FC<PropsWithChildren> = ({ children }) => {
  const persisitManagement = useReducer(
    persistReducer,
    cachedData || initialState
  );

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.PERSIST_STORAGE,
      JSON.stringify(persisitManagement[0])
    );
  }, [persisitManagement]);

  return (
    <PersistContextProvider value={persisitManagement}>
      {children}
    </PersistContextProvider>
  );
};

export default PersistProvider;
