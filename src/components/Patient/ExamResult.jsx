import React from "react";
import "./ExamResult.css"
import ModalImage from 'react-modal-image';
import api from '../../utils/api';

const ExamResult  = ({location}) => {
  const {infos, patientId, patientData} = location.state;
  const imageUrl = `${api.localIp  }/${ patientId  }/${   infos.attachment}`;
  const date = new Date(infos.date);

  const renderAlert = () => {
    const percentage = (infos.diagnostic * 100).toFixed(2);

    if (percentage > 60) {
      return (
        <div id="result-container-alert">
          <p style={{color: 'red'}}>Attention</p>
          <div id="result-infos">
            <p>Anomalie Détectée</p>
            <p>{`Probabilité : ${  percentage} %`}</p>
          </div>
        </div>
      )
    }
    return (
      <div id="result-container">
        <div id="result-infos">
          <p>Pas d&#39;anomalie détectée</p>
          <p>{`Probabilité : ${  percentage}`}</p>
        </div>
      </div>
    )
  };

  return(
    <div id="exam-result-container">
      <div id="title-container">
        Radio des poumons
      </div>

      <div id="middle-container">
        <div id="img-container" style={{maxWidth: "500px"}}>
          <ModalImage small={imageUrl} large={imageUrl} alt="Exam" />
        </div>
        <div id="infos-container">
          <p><b>{`Patient : ${  patientData.firstname  } ${  patientData.lastname}`}</b></p>
          <p><b>{`ID : ${  patientId}`}</b></p>
          <p><b>{`Date : ${  date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()}`}</b></p>
          <p><b>{`Examinateur : ${  infos.doctor}`}</b></p>
        </div>
      </div>

      {renderAlert()}
    </div>

  )
}

export default ExamResult;