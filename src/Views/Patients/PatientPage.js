import React from "react";
import {withRouter} from 'react-router-dom';
import './PatientPage.css';
import { FiMinus, FiPlus } from "react-icons/fi";
import Exams from "../../components/Patient/Exams";
import PersonalInfos from "../../components/Patient/PersonalInfos";
import NewExamPopup from "../../components/Patient/NewExamPopup";
import History from "../../components/Patient/History";

class PatientPage extends React.Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();
        const exams = [
                {
                    type: 'Radio des poumons',
                    date: '27-07-2019',
                    doctor: 'Dr. Leroux',
                    result: 'IA : anomalie'
                },
                {
                    type: 'Radio des poumons',
                    date: '27-07-2019',
                    doctor: 'Dr. Leroux',
                    result: 'IA : anomalie'
                },
            ];

        const vaccins = [
            {
                type: 'Corona Virus',
                date: '27-07-2019',
                doctor: 'Dr. Leroux',
                result: 'IA : anomalie'
            },
            {
                type: 'Grippe Aviaire',
                date: '27-07-2019',
                doctor: 'Dr. Leroux',
                result: 'IA : anomalie'
            }
        ];

        const history = [
            {
                type: 'Grippe',
                date: '27-07-2019',
                doctor: 'Dr. Leroux',
            },
            {
                type: 'Ebola',
                date: '18-07-2019',
                doctor: 'Dr. Leroux',
            }
        ]

        const infos = {
            firstname : 'John, Denis',
            lastname : 'Bouvier',
            marital: 'China',
        };


        this.state = {
            name: this.props.location.state.name,

            elements: [{
                id: 1,
                text: 'Infos personnelles',
                isOpen: true,
                render: <PersonalInfos infos={infos} />
            },
                {
                    id: 2,
                    text: 'Antecedents',
                    isOpen: false,
                    render: <History history={history}/>
                },
                {
                    id: 3,
                    text: 'Vaccins',
                    isOpen: false,
                    render: <History history={vaccins}/>
                },
                {
                    id: 4,
                    text: 'Examens',
                    isOpen: false,
                    render: <Exams exams={exams}/>
                }
            ]
        }

    }

    componentWillMount()
    {
        // when params sent via url
        if (this.props.location.state)
        {
            let params = this.props.history.location.state;
            this.setState({ params });
        }
    }

    toggle(id) {
        let newState = Object.assign({}, this.state);
        console.log(newState.elements);
        newState.elements[id - 1].isOpen = !newState.elements[id - 1].isOpen;
        this.setState(newState)
    }


    createNewExam() {
        this.child.current.open();
    }

    render() {
        return (
            <div id="patient-page-container">
                <div id="patient-header">
                    <h1>Patient {this.state.name}</h1>
                </div>

                <div id="patient-infos-container">

                    {this.state.elements.map (x => (
                        <div key={x.id} className="info-container">
                        <div onClick={() => this.toggle(x.id)} key={x.id} className="collapse-header">
                            {x.text}
                            {x.isOpen ? <FiMinus/> : <FiPlus/>}

                            {console.log(x)}
                        </div>
                            {x.isOpen ? x.render : undefined}

                        </div>


                        ))}
                </div>

                <div onClick={() => this.createNewExam()} id="new-exam-button">
                    Nouvel Examen
                </div>

                <NewExamPopup ref={this.child}/>


            </div>
        )
    }
}

export default withRouter(PatientPage);
