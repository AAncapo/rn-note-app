import { createContext, useState } from "react";
import { defaultConfig } from "../config";
import { mockupNotes } from "../mockups/notes";
import { getFromStorage } from "../services/async-strorage-handler";

// Crear contexto
export const DatabaseContext = createContext();

//Crear provider
export function DatabaseProvider({ children }) {
  // const localData = getFromStorage('data')
  const [database, setDatabase] = useState({
    notes: mockupNotes,
    settings: defaultConfig,
  });
  return (
    <DatabaseContext.Provider value={{ database, setDatabase }}>
      {children}
    </DatabaseContext.Provider>
  );
}
