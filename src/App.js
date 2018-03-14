import React from "react";
import ReactDOM from "react-dom";
import { Provider} from 'unstated';
import Store from './store';
import Counter from './Counter';

const App = () => {
  return (
    <Provider inject={Store}>
      <Counter />
      <p>React here!</p>
      <Counter/>
    </Provider>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));

