//plaintext | image | checklistitem | link | innerlink
import { getRandomUUID } from "../services/crypto";

export const createContent = (newtype = "plaintext", newtext = "") => {
  return {
    id: getRandomUUID(),
    type: newtype,
    text: newtext,
    checked: false,
  };
};
