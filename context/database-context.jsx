import { createContext, useState } from "react";
import { defaultConfig } from "../config";

export const DatabaseContext = createContext();

export function DatabaseProvider({ children }) {
  const [database, setDatabase] = useState({
    notes: [],
    settings: defaultConfig,
  });
  return (
    <DatabaseContext.Provider value={{ database, setDatabase }}>
      {children}
    </DatabaseContext.Provider>
  );
}
