import "./App.css";
import { Provider } from "react-redux";

import store from "./config/store";
import Root from "./common/Root";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Root />
      </div>
    </Provider>
  );
}

export default App;
