import React from "react";
import {
    BrowserRouter as Router,
    Switch,
  Route,
} from "react-router-dom";
import './Menu.css'
import logo from '../../assets/blind-blue.svg'
import Account from "../User/Account";
import SearchPatients from "../../Views/Patients/SearchPatients";
import SearchExams from "../../Views/Exams/SearchExams";
import PatientPage from "../../Views/Patients/PatientPage";
import ExamResult from '../Patient/ExamResult';

const Menu = () => {
    return (
      <Router>
        <div id="container">
          <div id="top-container">
            <img alt="" src={logo} />
            <div id="header">
              <Account name="Dr. Girafon" />
            </div>
          </div>
          <div id="lower-container">
            <div id="sidebar">
              <div id="menu-container">
                <a href='/'>Accueil</a>
                <hr />
                <a href="/patients">Patients</a>
                <hr />
                <a href="/exams">Examens</a>
              </div>
              <div id="opinions-container">
                <hr />
                <a href="/">Donnez votre avis !</a>
              </div>
            </div>
            <Switch>
              <Route path="/" exact><h2>Welcome</h2></Route>
              <Route path="/patients" component={SearchPatients} />
              <Route path="/exams" component={SearchExams} />
              <Route path="/patient/:id" component={PatientPage} />
              <Route path="/exam/:id" component={ExamResult} />
            </Switch>
          </div>
        </div>
      </Router>
    )
}

export default Menu;