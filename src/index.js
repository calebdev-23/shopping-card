import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min"
import {ContextProvider} from "./context/ContextCard";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Router>
          <ContextProvider>
              <App/>
          </ContextProvider>
      </Router>
  </React.StrictMode>
);

