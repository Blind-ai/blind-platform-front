import React from 'react';
import './App.css';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';


import Menu from "./components/Navigation/Menu";

function App() {
  return (
    <Menu />

  );
}

export default App;
