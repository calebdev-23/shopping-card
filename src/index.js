import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min"
import {CardProvider} from "./context/UseContext";
// eslint-disable-next-line react-hooks/rules-of-hooks

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <CardProvider>
              <App />
          </CardProvider>
      </Router>
  </React.StrictMode>
);

