export const ADD_KEYBOARD_SHORTCUT = "ADD_KEYBOARD_SHORTCUT";
export const DELETE_KEYBOARD_SHORTCUT = "DELETE_KEYBOARD_SHORTCUT";

interface KeyboardShortcutMeta {
  keyboardShortcut: string;
  description: string;
}

export type KeyboardShortcutsMap = Record<string, KeyboardShortcutMeta>;

// Each screen route is mapped to a map of keyboard shortcut and it's meta
type KeyboardShortcutsMapToRoute = Record<string, KeyboardShortcutsMap>;

export interface InitialReducerState {
  keyboardShortcuts: KeyboardShortcutsMapToRoute;
}

// export const initialReducerState: InitialReducerState = {
//   keyboardShortcuts: {
//     "route: 1": {
//       ks1: { keyboardShortcut: "asdas", description: "asdas" },
//     },
//   },
// };

export const getInitialReducerState = (): InitialReducerState => ({
  keyboardShortcuts: {},
});
