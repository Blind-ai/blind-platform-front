import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Menu.css'
import logo from '../../assets/blind-blue.svg'
import Account from "../User/Account";
import SearchPatients from "../../Views/Patients/SearchPatients";
import SearchExams from "../../Views/Exams/SearchExams";
import PatientPage from "../../Views/Patients/PatientPage";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <h2>Welcome</h2>
    },
    {
        path: "/patients",
        main: () => <SearchPatients />
    },
    {
        path: "/exams",
        main: () => <SearchExams />
    },
    {
        path: "/patient/:id",
        main: () => <PatientPage />
    }

];

function Menu() {
    return (
      <Router>

        <div id="container">

          <div id="top-container">
            <img src={logo} />

            <div id="header">
              <Account name="Dr. Girafon" />
            </div>

          </div>

          <div id="lower-container">
            <div id="sidebar">
              <div id="menu-container">
                <a>Accueil</a>
                <hr />
                <a href="/patients">Patients</a>
                <hr />
                <a href="/exams">Examens</a>
              </div>

              <div id="opinions-container">
                <hr />
                <a>Donnez votre avis !</a>
              </div>
            </div>
            <Switch>
              {routes.map((route, index) => (
                            // Render more <Route>s with the same paths as
                            // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
                        ))}
            </Switch>

          </div>



        </div>
      </Router>

    )
}

export default Menu;