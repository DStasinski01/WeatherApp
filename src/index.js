import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import App from './App';
import "./styles/main.scss";
import {StateContext} from "./context"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <StateContext>
    <App />
    </StateContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

