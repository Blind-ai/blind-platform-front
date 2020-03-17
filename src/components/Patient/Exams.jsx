import React, {useState, useEffect} from "react";
import ModalImage from "react-modal-image";
import { useHistory } from "react-router-dom";
import api from '../../utils/api'
import './Exams.css'

// TODO revoir les props

const Exams = ({id, exams, patientInfos}) => {
    const [examsList, setExamsList] = useState(exams);
    const history = useHistory();

    useEffect(() => {
        setExamsList(exams)
    }, [exams]);


    const navigateToResult = (exam) => {
        history.push({
            pathname: `/exam/3`,
            state: {
                infos : exam,
                patientId : id,
                patientData : patientInfos
            }
        });
    };

    const renderExamType = (type) => {
        const numType = parseInt(type, 10);
        switch (numType) {
            case 1 :
                return "Peau";
            case 2 : return "Radio des pounons";
            default : return "NO TYPE";
        }
    };

    const renderExams= () => {
        if (examsList.length === 0) {
            return <div id="exam-row">Vide</div>
        }
        return examsList.map((exam, index) => {
            const {type, date, doctor, attachment} = exam;
            const imageUrl = `${api.localIp  }/${  id  }/${   attachment}`;

            return (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} id="exam-row">
                <div role="button" tabIndex={0} id="exam-clickable" onKeyDown={navigateToResult} onClick={() => navigateToResult(exam)}>
                  <div id="exam-info">{renderExamType(type)}</div>
                  <div>{date}</div>
                  <div>{doctor}</div>
                </div>
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
