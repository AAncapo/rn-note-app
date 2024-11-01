import { useState } from "react";
import { createContent } from "../templates/content";
import useGlobal from "./useGlobal";

export default function useContent(note) {
  const [contents, setContents] = useState(note.contents);
  const { currentFocus, currentText, currentSelection } = useGlobal();

  const addItem = ({ type }) => {
    if (!currentFocus) return;

    let current = "";
    let selected = "";
    let after = "";

    const { start, end } = currentSelection;
    if (start === end) {
      const separator = /[\n]/;
      // usa texto desde anterior salto de linea hasta el proximo como selected
      let begins = currentText.substring(0, start); // todo el texto anterior a la seleccion
      begins = begins.split(separator); //separa texto anterior por linebreaks
      let textStart = begins.length === 0 ? "" : begins.pop();
      current = begins.join(""); // asignar luego al current content.text

      let ends = currentText.substring(start, currentText.length); //misma operacion que anterior pero con el final
      ends = ends.split(separator);
      let textEnd = ends.length === 0 ? "" : ends.shift();
      after = ends.join("");

      selected = textStart + textEnd;
    } else {
      // Crear checkitem con texto seleccionado
      selected = current.substring(start, end); //TODO: check if selected has line breaks
      after = current.substring(end, current.length - 1);
      current = current.substring(0, start);
    }

    // Update note with new content
    let content = contents;
    const index = content.findIndex((cont) => cont.id === currentFocus);
    if (index !== -1) {
      // console.log(index);
      let currContent = content[index];

      // si current no esta vacio -> debe mantenerse con el mismo tipo y asignarlo al currentContent
      if (current !== "") {
        // Si current tiene text (anterior al selected) hay que crear 2 mas posiblemente
        currContent.text = current;
      } else {
        // Si el current esta vacio solo hay que cambiarle el texto por el selected y añadir un nuevo item despues (si after no esta vacio)
        currContent.text = selected; // el texto del currentContent es el seleccionado
        currContent.type = type;
      }
      content = content.toSpliced(index, 1, currContent);

      if (current !== "") {
        // hay que crear uno nuevo con el selected
        const newCont = createContent(type, selected);
        content.splice(index + 1, 0, newCont);
      }

      if (after !== "") {
        const afterCont = createContent("plaintext", after);
        const idx = current !== "" ? index + 2 : index + 1;
        content.splice(idx, 0, afterCont);
      }

      setContents([...content]);

      console.log("currContent: ", currContent.text);
    }
  };

  const updateItem = (item) => {
    const index = contents.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      setContents([...contents.toSpliced(index, 1, item)]);
    }
  };

  const deleteItem = (id) => {
    const newContent = contents.filter((i) => i.id === id);
    setContents([...newContent]);
  };

  return { contents, addItem, updateItem, deleteItem };
}
