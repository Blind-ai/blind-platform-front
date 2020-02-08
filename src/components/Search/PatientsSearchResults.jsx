import React from 'react';
import './PatientsSearchResults.css'
import { useHistory, withRouter } from "react-router-dom";

const PatientsSearchResults = ({patients, searchTag}) => {
    const history = useHistory();

    function mergeArrays(...arrays) {
        let jointArray = [];

        arrays.forEach(array => {
            jointArray = [...jointArray, ...array]
        });
        const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index);
        return (uniqueArray);
    }

    function getlastExamDate(examsList) {
        if (examsList.length > 0) {
            return '27-01-2020'
        }
        return "Pas d'examen";
    }

    function filterPatients() {
        const firstNameFiltered = patients.filter((patient) => {
            return (patient.firstname.toLowerCase().includes(searchTag.toLowerCase()))
        });
        const lastNameFiltered = patients.filter((patient) => {
            return (patient.lastname.toLowerCase().includes(searchTag.toLowerCase()))
        });

        return mergeArrays(firstNameFiltered, lastNameFiltered);
    }

    function renderTableData() {
        if (searchTag) {
            const filteredPatients = filterPatients();
            console.log(filteredPatients)

            return filteredPatients.map((patient, index) => {
                const {_id, firstname, lastname} = patient;
                return (
                  <tr
                    id={index % 2 !== 0 ? 'row-normal' : 'row-greyed'}
                    key={_id}
                    onClick={() =>
                    {
                       history.push({
                            pathname: `/patient/${_id}`,
                            state: {
                                infos : patient,
                            }
                        });
                    }}
                  >
                    <td id="name-cell">{`${firstname  } ${  lastname}`}</td>
                    <td>{getlastExamDate(patient.examinations)}</td>
                    <td>{_id}</td>
                  </tr>

                )
            })
        }
        return null;
    }

    return (
      <table cellSpacing={0} id="results-table">
        <tbody>
          <tr id="list-header">
            <th>Nom</th>
            <th>Date du dernier examen</th>
            <th>ID</th>
          </tr>
          {renderTableData()}
        </tbody>
      </table>
    )
}

export default withRouter(PatientsSearchResults);