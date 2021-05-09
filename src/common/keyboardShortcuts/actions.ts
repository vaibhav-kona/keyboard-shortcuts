import { ADD_KEYBOARD_SHORTCUT, DELETE_KEYBOARD_SHORTCUT } from "./constants";

export interface Action {
  type: string;
  keyCombo?: string;
  description: string;
}

const addKeyboardShortcut = (keyCombo: string, description: string) => {
  return {
    type: ADD_KEYBOARD_SHORTCUT,
    keyCombo,
    description,
  };
};

const deleteKeyboardShortcut = (keyCombo: string) => {
  return {
    type: DELETE_KEYBOARD_SHORTCUT,
    keyCombo,
  };
};

const actions = {
  addKeyboardShortcut,
  deleteKeyboardShortcut,
};

export default actions;
