import React, {useState} from "react";
import {withRouter} from 'react-router-dom';
import './PatientPage.css';
import { FiMinus, FiPlus } from "react-icons/fi";
import Exams from "../../components/Patient/Exams";
import PersonalInfos from "../../components/Patient/PersonalInfos";
import NewExamPopup from "../../components/Patient/NewExamPopup";
import History from "../../components/Patient/History";

/* eslint-disable no-underscore-dangle */

const initialElements = [
  {
    id: 1,
    text: 'Infos personnelles',
    isOpen: true, 
  }, 
    {
        id: 2,
        text: 'Antecedents',
        isOpen: false,
    },
    {
        id: 3,
        text: 'Vaccins',
        isOpen: false,
    },
    {
        id: 4,
        text: 'Examens',
        isOpen: false,
    }
];


const PatientPage = ({location}) => {
    const [infos, setInfos] = useState(location.state.infos);
    const [elements, setElements] = useState(initialElements);
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    function closeCallback() {
      setIsPopupOpen(false)
    }

    function toggle(id) {
        const newElements = [ ...elements];
        newElements[id - 1].isOpen = !newElements[id - 1].isOpen;
        setElements(newElements);
    }

    function createNewExam() {
      setIsPopupOpen(true);
    }

    function onImageUploadCallback(newInfos) {
        setInfos(newInfos);
    }

    function renderElement(id) {
        switch (id) {
            case 1 :
                if (elements[0].isOpen)
                    return  <PersonalInfos infos={infos} />;
                return null;
            case 2 :
                if (elements[1].isOpen)
                    return  <History history={infos.background} />;
                return null;
            case 3 :
                if (elements[2].isOpen)
                    return  <History history={infos.vaccines} />;
                return null;
            case 4 :
                if (elements[3].isOpen)
                    return  <Exams exams={infos.examinations} id={infos._id} />;
                return null;
            default : return null
        }
    }
    return (
      <div id="patient-page-container">
        <div id="patient-header">
          <h1>
            Patient
            {infos._id}
          </h1>
        </div>

        <div id="patient-infos-container">

          {elements.map (x => (
            <div key={x.id} className="info-container">
              <div role="button" onClick={() => toggle(x.id)} key={x.id} onKeyDown={() => toggle(x.id)} className="collapse-header">
                {x.text}
                {x.isOpen ? <FiMinus /> : <FiPlus />}
              </div>
              {renderElement(x.id)}
            </div>
              ))}
        </div>
        <div onClick={() => createNewExam()} id="new-exam-button">
          Nouvel Examen
        </div>

        {isPopupOpen ? <NewExamPopup onUpload={onImageUploadCallback} id={infos._id} closeCallback={closeCallback} /> : null}
      </div>
    )
};

export default withRouter(PatientPage);
