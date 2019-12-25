import React from "react";
import './PatientsExamResults.css';

class PatientExamResults extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            searchTag : '',
            patients: [
                { id: 1, name: 'Lucas CLerisse', type:"Peau",lastExam: '20-12-2019' },
                { id: 2, name: 'Nathan Lebon', type: "Poumons", lastExam: '20-12-2019' },
                { id: 3, name: 'Flavian Gontier', type: "Peau, Poumouns", lastExam: '20-12-2019' },
                { id: 4, name: 'Fabien Labarbe', type: "Poumouns", lastExam: '20-12-2019' },
                { id: 5, name: 'Yoann Kersulec', type: "Peau", lastExam: '20-12-2019' },
                { id: 6, name: 'Hadrien Mortier', type: "Peau", lastExam: '20-12-2019' }
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

            const filter = this.state.searchTag

            const filtered = this.state.patients.filter((patient) => {
                return (patient.name.toLowerCase().includes(filter.toLowerCase()))
            })

            console.log(filtered)
            console.log(this.state.patients)

            return filtered.map((student, index) => {
                const {id, name, lastExam, type} = student
                return (
                    <tr id={index % 2 !== 0 ? null : 'greyed'} key={id}>
                        <td id="name-cell">{name}</td>
                        <td>{lastExam}</td>
                        <td>{type}</td>
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
                    <th>Type</th>
                </tr>
                {this.renderTableData()}
                </tbody>


            </table>
        )
    }

}

export default PatientExamResults;