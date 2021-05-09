import { combineReducers } from "redux";

import keyboardShortcutsReducer from "../common/keyboardShortcuts/reducer";

const rootReducer = combineReducers({
  keyboardShortcutsReducer,
});

export default rootReducer;
