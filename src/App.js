import React from 'react';
import './App.css';
import Menu from "./components/Navigation/Menu";
import { BrowserRouter, Route} from 'react-router-dom';
import SearchPatients from "./Views/Patients/SearchPatients";

function App() {
  return (
        <Menu/>

  );
}

export default App;
