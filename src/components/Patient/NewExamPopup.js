import React from "react";
import './NewExamPopup.css';
import Dropzone from 'react-dropzone'
import Select from 'react-select'
import api from '../../utils/api'


const dropzoneStyle = {
    width  : "20%",
    height : "150px",
    border : "1px solid black"
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


class NewExamPopup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen : false,
            examType : '',
            doctorName : '',
            id: props.id
        };

        this.handleTextInputChange = this.handleTextInputChange.bind(this);

    }

    open() {
        this.setState({
            isOpen: true
        })
    }

    close() {
        this.setState({
            isOpen: false
        })
    }

    onBackgroundClick(event) {

    }

    async upload(file) {


        const {id, doctorName, examType} = this.state;
        const response =  await api.uploadImage(file[0], id, examType, doctorName);

        alert("Successfully uploaded file");

        this.props.onUpload(response)
    }

    async handleTextInputChange(event) {
        await this.setState({doctorName: event.target.value})
    }

    async handleSelectChange(option) {
        await this.setState({examType: option.value})
    }

    render() {
        if (this.state.isOpen) {
            return (
                <div onClick={(event) => this.onBackgroundClick(event)} id="popup-background">

                    <div id="popup-container">
                        <div onClick={() => {this.close()}} id="close">
                            X
                        </div>
                        <div id="popup-header">
                            Nouvel Examen
                        </div>

                        <div id="popup-content">

                            <div id='popup-row'>
                                <p> Type d'examen</p>
                                <Select  id="popup-row-select" options={options} onChange={selectedOption => this.handleSelectChange(selectedOption)}/>
                            </div>
                            <div id='popup-row'>
                                <p> Nom du médecin</p>
                                <input value={this.state.doctorName} id="popup-row-input" onChange={e => this.handleTextInputChange(e)}/>
                            </div>

                        </div>


                        <Dropzone
                            style={dropzoneStyle}

                            onDrop={ acceptedFile => {
                                this.upload(acceptedFile)

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
                </div>
            )
        }
        else return null;
    }

}

export default NewExamPopup;