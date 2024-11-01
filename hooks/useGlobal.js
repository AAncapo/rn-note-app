import { useContext } from "react";
import { GlobalContext } from "../context/global-context";

export default function useGlobal() {
  const { global, setGlobal } = useContext(GlobalContext);

  const setDatabase = (value) =>
    setGlobal({ ...global, database: { ...value } });

  const setCurrentNote = (value) =>
    setGlobal({ ...global, currentNote: { ...value } });

  const setCurrentFocus = (value) =>
    setGlobal({ ...global, currentFocus: value });

  const setCurrentText = (value) =>
    setGlobal({ ...global, currentText: value });

  const setCurrentSelection = (value) =>
    setGlobal({ ...global, currentSelection: { ...value } });

  return {
    global,
    database: global.database,
    currentNote: global.currentNote,
    currentFocus: global.currentFocus,
    currentText: global.currentText,
    currentSelection: global.currentSelection,
    setDatabase,
    setCurrentNote,
    setCurrentFocus,
    setCurrentText,
    setCurrentSelection,
  };
}
