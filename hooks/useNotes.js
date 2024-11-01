import { router } from "expo-router";
import useDatabase from "./useDatabase";
import { createContent } from "../templates/content";
import { getRandomUUID } from "../services/crypto";
export default function useNotes() {
  const { notes, setNotes } = useDatabase();

  const addNote = ({ _title = "" }) => {
    // console.log("added note");
    //TODO: wipe data
    // const content = new Content();
    const newNote = {
      id: getRandomUUID(),
      title: "",
      contents: [createContent()],
      createdAt: "",
      lastModified: "",
      preview: { title: "", content: "" },
      tags: [],
      pinned: false,
    };
    setNotes([newNote, ...notes]);
    router.push(`/${newNote.id}`);
  };

  const updateNote = (note) => {
    console.log("note updated");
    const index = notes.findIndex((n) => n.id === note.id);
    if (index !== -1) {
      const newNotes = notes.toSpliced(index, 1, note);
      setNotes(newNotes);
    }
  };

  const deleteNote = (id) => {
    console.log("note deleted");
    const newNotes = notes.filter((n) => n.id !== id);
    setNotes(newNotes);
  };

  return {
    notes,
    addNote,
    updateNote,
    deleteNote,
  };
}
