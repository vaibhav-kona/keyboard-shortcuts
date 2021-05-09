import {
  getInitialReducerState,
  InitialReducerState,
  ADD_KEYBOARD_SHORTCUT,
  DELETE_KEYBOARD_SHORTCUT,
  KeyboardShortcutsMap,
} from "./constants";
import { Action } from "./actions";

const reducer = (state: InitialReducerState, action: Action) => {
  switch (action.type) {
    case ADD_KEYBOARD_SHORTCUT: {
      const currentPathname = window.location.pathname;
      const keyboardShortCutsForPathname =
        state.keyboardShortcuts[currentPathname];

      if (action.keyCombo) {
        const comboMeta = {
          keyboardShortcut: action.keyCombo,
          description: action.description,
        };
        if (keyboardShortCutsForPathname) {
          keyboardShortCutsForPathname[action.keyCombo] = comboMeta;
        } else {
          state.keyboardShortcuts[currentPathname] = {
            [action.keyCombo]: comboMeta,
          };
        }
      }

      return {
        ...state,
      };
    }

    case DELETE_KEYBOARD_SHORTCUT: {
      const currentPathname = window.location.pathname;
      const keyboardShortCutsForPathname =
        state.keyboardShortcuts[currentPathname];

      if (action.keyCombo) {
        // Delete the keycombo and update the state
        const newKeyboardShortcuts: KeyboardShortcutsMap = {};
        Object.keys(keyboardShortCutsForPathname).forEach((key) => {
          if (key !== action.keyCombo) {
            newKeyboardShortcuts[key] = keyboardShortCutsForPathname[key];
          }
        });
        state.keyboardShortcuts[currentPathname] = newKeyboardShortcuts;
      }

      return {
        ...state,
      };
    }

    default:
      return getInitialReducerState();
  }
};

export default reducer;
