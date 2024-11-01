import { createContext, useState } from "react";
import { defaultConfig } from "../config";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [global, setGlobal] = useState({
    database: {
      notes: [],
      settings: defaultConfig,
    },
    currentNote: null,
    currentFocus: null,
    currentText: null,
    currentSelection: { start: null, end: null },
  });
  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
      {children}
    </GlobalContext.Provider>
  );
}
