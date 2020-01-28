import React from "react";
import './PatientsSearchResults.css'
import {withRouter} from 'react-router-dom';
import api from '../../utils/api'

class PatientsSearchResults extends React.Component {

    constructor(props) {
        super(props);


      this.getPatients()

        this.state = {
            searchTag : '',
            patients: [

            ]
        }
    }

    async getPatients() {
        const response = await api.getPatients();

        this.setState({
            patients: response
        })

        console.log(this.state)
    }


    async componentWillReceiveProps(nextProps) {

        console.log(nextProps)
        await this.setState({searchTag: nextProps.searchTag});
        console.log(this.state.searchTag)
    }


    getlastExamDate(examsList) {
        if (examsList.length > 0) {
            return '27-01-2020'
        }
        return "Pas d'examen";
    }

    //TODO completement refaire cette fonction..

    renderTableData() {

        if (this.state.searchTag) {

            const filter = this.state.searchTag;

            const firstNameFiltered = this.state.patients.filter((patient) => {
                return (patient.firstname.toLowerCase().includes(filter.toLowerCase()))
            });

            const lastNameFiltered = this.state.patients.filter((patient) => {
                return (patient.lastname.toLowerCase().includes(filter.toLowerCase()))
            });

            Array.prototype.unique = function() {
                let a = this.concat();
                for(let i=0; i<a.length; ++i) {
                    for(let j=i+1; j<a.length; ++j) {
                        if(a[i] === a[j])
                            a.splice(j--, 1);
                    }
                }

                return a;
            };

            let filtered = firstNameFiltered.concat(lastNameFiltered).unique();


            return filtered.map((patient, index) => {
                const {_id, firstname, lastname} = patient;
                return (
                    <tr id={index % 2 !== 0 ? 'row-normal' : 'row-greyed'} key={_id} onClick={() =>
                    {
                        this.props.history.push({
                            pathname: '/patient/' + _id,
                            state: {
                                infos : patient,
                            }
                        });
                    }}>

                            <td id="name-cell">{firstname + ' ' + lastname}</td>
                            <td>{this.getlastExamDate(patient.examinations)}</td>
                            <td>{_id}</td>
                    </tr>

                )
            })
        }
    }

    render() {
        return (

            <table cellSpacing={0} id="results-table">
                <tbody>
                <tr id="list-header">
                    <th>Nom</th>
                    <th>Date du dernier examen</th>
                    <th>ID</th>
                </tr>
                {this.renderTableData()}
                </tbody>


            </table>
        )
    }
}

export default withRouter(PatientsSearchResults);