import { setToStorage } from "../services/async-strorage-handler";
import { DatabaseContext } from "../context/database-context";
import { useContext, useEffect } from "react";

export default function useDatabase() {
  const { database, setDatabase } = useContext(DatabaseContext);

  useEffect(() => {
    setToStorage("data", database);
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
