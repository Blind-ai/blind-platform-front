import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';


import Menu from "./components/Navigation/Menu";

const App = () => {
  return (
    <Provider store={store}>
      <Menu />
    </Provider>
  );
};

export default App;
