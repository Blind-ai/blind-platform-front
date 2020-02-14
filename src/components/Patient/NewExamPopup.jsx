import React, {useState} from "react";
import './NewExamPopup.css';
import Dropzone from 'react-dropzone'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import api from '../../utils/api'

// eslint-disable no-alert
/* eslint-disable-next-line react/no-unescaped-entities */



const dropzoneStyle = {
    width  : "20%",
    height : "150px",
    border : "1px solid black",
  backgroundColor: '#8bffa0'
};


const options = [
    {
        value: 'Anomalie Pulmonaire',
        label: 'Anomalie Pulmonaire',
    },
    {
        value: 'Anomalie cutanee',
        label: 'Anomalie cutanee',
    }
    ];


const NewExamPopup = ({id, closeCallback, onUpload}) => {
  const [examType, setExamType] = useState('');
  const [doctorName, setDoctorName] = useState('');

  async function upload(file) {

    if (!examType || !doctorName)
      return alert("Missing params")

    const response = await api.uploadImage(file[0], id, examType, doctorName);

    alert("Successfully uploaded file");

    return onUpload(response)
  }

  return (

    <Modal show size="lg">
      <Modal.Header>
        <Modal.Title>Nouvel Examen</Modal.Title>

        <Button role="button" tabIndex={0} onClick={() => {closeCallback()}} onKeyDown={closeCallback} id="close">
          X
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div id="popup-content">
          <div id='popup-row'>
            <p> Type d'examen</p>
            <Select id="popup-row-select" options={options} onChange={selectedOption => setExamType(selectedOption.value)} />
          </div>
          <div id='popup-row'>
            <p> Nom du médecin</p>
            <input value={doctorName} id="popup-row-input" onChange={e => setDoctorName(e.target.value)} />
          </div>
        </div>
        <div id="popup-row">
          <Dropzone
            style={dropzoneStyle}
            onDrop={acceptedFile => {
          upload(acceptedFile)
        }}
          >
            {({getRootProps, getInputProps}) => (
              <div id="dropzone" {...getRootProps()}>
                <input id="drop-zone-input" {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
        )}
          </Dropzone>
        </div>
      </Modal.Body>
    </Modal>


  )
};

export default NewExamPopup;