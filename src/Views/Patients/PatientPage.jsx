import React from "react";
import {withRouter} from 'react-router-dom';
import './PatientPage.css';
import { FiMinus, FiPlus } from "react-icons/fi";
import Exams from "../../components/Patient/Exams";
import PersonalInfos from "../../components/Patient/PersonalInfos";
import NewExamPopup from "../../components/Patient/NewExamPopup";
import History from "../../components/Patient/History";

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
];

class PatientPage extends React.Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();
        console.log("PATIENT PAGE")

        this.onImageUploadCallback = this.onImageUploadCallback.bind(this)

        const {infos} = this.props.location.state;
        console.log(infos)

        // TODO pour les elemts, il faudra enlever le field render, trop de problemes. On pourra donc utiliser le state normalement
        this.state = {
            infos,

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
                    render: <History history={infos.background} />
                },
                {
                    id: 3,
                    text: 'Vaccins',
                    isOpen: false,
                    render: <History history={infos.vaccines} />
                },
                {
                    id: 4,
                    text: 'Examens',
                    isOpen: false,
                    render: <Exams ref={this.exams} exams={infos.examinations} />
                }
            ]
        }
    }

    toggle(id) {
        const newState = { ...this.state};
        newState.elements[id - 1].isOpen = !newState.elements[id - 1].isOpen;
        this.setState(newState)
    }

    createNewExam() {
        this.child.current.open();
    }

    async onImageUploadCallback(infos) {

        console.log(this.state.infos)

        await this.setState({
            infos
        })

        console.log(this.state.infos)
    }

    renderElement(id) {
        switch (id) {
            case 1 :
                if (this.state.elements[0].isOpen)
                    return  <PersonalInfos infos={this.state.infos} />;
                return null;
            case 2 :
                if (this.state.elements[1].isOpen)
                    return  <History history={this.state.infos.background} />;
                return null;
            case 3 :
                if (this.state.elements[2].isOpen)
                    return  <History history={this.state.infos.vaccines} />;
                return null;
            case 4 :
                if (this.state.elements[3].isOpen)
                    return  <Exams exams={this.state.infos.examinations} id={this.state.infos._id} />;
                return null;
            default : return null

        }
    }

    render() {

        const {_id} = this.state.infos;

        return (
          <div id="patient-page-container">
            <div id="patient-header">
              <h1>
                Patient
                {_id}
              </h1>
            </div>

            <div id="patient-infos-container">

              {this.state.elements.map (x => (
                <div key={x.id} className="info-container">
                  <div onClick={() => this.toggle(x.id)} key={x.id} className="collapse-header">
                    {x.text}
                    {x.isOpen ? <FiMinus /> : <FiPlus />}
                  </div>
                  {this.renderElement(x.id)}

                </div>


                        ))}
            </div>

            <div onClick={() => this.createNewExam()} id="new-exam-button">
              Nouvel Examen
            </div>

            <NewExamPopup onUpload={this.onImageUploadCallback} id={_id} ref={this.child} />


          </div>
        )
    }
}

export default withRouter(PatientPage);
