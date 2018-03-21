import React from "react";
import Store from 'store';
import ReactDOM from "react-dom";
import { Provider} from 'unstated';

import Page from 'pages';

import styles from 'styles/app.css';
import tachyons from 'tachyons-custom/css/tachyons.css';

const App = () => {
  return (
    <Provider inject={Store}>
      <Page theme='page' />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
