import React from "react";
import './PatientsSearchResults.css'
import {withRouter} from 'react-router-dom';

class PatientsSearchResults extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTag : '',
            patients: [
                { id: 1, name: 'Lucas CLerisse', lastExam: '20-12-2019' },
                { id: 2, name: 'Nathan Lebon', age: 19, lastExam: '20-12-2019' },
                { id: 3, name: 'Flavian Gontier', age: 16, lastExam: '20-12-2019' },
                { id: 4, name: 'Fabien Labarbe', age: 25, lastExam: '20-12-2019' },
                { id: 5, name: 'Yoann Kersulec', age: 25, lastExam: '20-12-2019' },
                { id: 6, name: 'Hadrien Mortier', age: 25, lastExam: '20-12-2019' },
                { id: 345, name: 'John Frusciante', age: 25, lastExam: '20-12-2019' },
            ]
        }
    }

    async componentWillReceiveProps(nextProps) {

        console.log(nextProps)
        await this.setState({searchTag: nextProps.searchTag});
        console.log(this.state.searchTag)
    }



    renderTableData() {

        if (this.state.searchTag) {

            const filter = this.state.searchTag;

            const filtered = this.state.patients.filter((patient) => {
                return (patient.name.toLowerCase().includes(filter.toLowerCase()))
            });

            console.log(filtered);
            console.log(this.state.patients);

            return filtered.map((patient, index) => {
                const {id, name, lastExam} = patient;
                return (
                    <tr id={index % 2 !== 0 ? 'row-normal' : 'row-greyed'} key={id} onClick={() =>
                    {
                        this.props.history.push({
                            pathname: '/patient/' + id,
                            state: {
                                name : name,
                            }
                        });
                    }}>

                            <td id="name-cell">{name}</td>
                            <td>{lastExam}</td>
                            <td>{id}</td>
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