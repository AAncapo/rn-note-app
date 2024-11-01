import { setToStorage } from "../services/async-strorage-handler";
import { useEffect } from "react";
import useGlobal from "./useGlobal";

export default function useDatabase() {
  const { database, setDatabase } = useGlobal();

  useEffect(() => {
    // setToStorage("data", database);
  }, [database]);

  const setNotes = (newNotes) => {
    setDatabase({ ...database, notes: [...newNotes] });
  };

  const setConfig = (newConfig) =>
    setDatabase({ ...database, settings: [...newConfig] });

  return {
    database,
    notes: database.notes,
    config: database.settings,
    setNotes,
    setConfig,
  };
}
