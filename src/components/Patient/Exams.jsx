import React, {useState, useEffect} from "react";
import ModalImage from "react-modal-image";
import './Exams.css'

const Exams = ({id, exams}) => {
    const [examsList, setExamsList] = useState(exams);

    useEffect(() => {
        setExamsList(exams)
    }, [exams]);

    function renderExams() {
        if (examsList.length === 0) {
            return <div id="exam-row">Vide</div>
        }
        return examsList.map((exam, index) => {
            const {type, date, doctor, attachment} = exam;
            const imageUrl = `http://188.166.53.41:5000/${  id  }/${  attachment}`;

            return (
              <div key={index} id="exam-row">
                <div id="exam-info">{type}</div>
                <div>{date}</div>
                <div>{doctor}</div>
                  <div style={{maxWidth: "300px"}}>
                      <ModalImage small={imageUrl} large={imageUrl} alt={`Exam ${  date}`} />
                  </div>
              </div>
            )
        })
    }

    return (
      <div id="personnalInfos-container">
        {renderExams()}
      </div>
    )

};

export default Exams;
