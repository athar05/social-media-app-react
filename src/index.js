import React from "react";
// import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import App from "./App";
import { makeServer } from "./server";
import {Provider} from 'react-redux';
import {store} from "./store"

// Call make Server
makeServer();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <Provider store={store}>
  <App/>
  </Provider>
  </StrictMode>,
)
