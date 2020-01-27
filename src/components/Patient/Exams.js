import React from "react";
import './Exams.css'

class Exams extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            exams : this.props.exams
        }

    }

    renderExams() {
        return this.state.exams.map((exam, index) => {
            const {type, date, doctor, result} = exam;
            console.log(type, date, doctor, result);

            return (
            <div key={index} id="exam-row">
                <div id="exam-info">{type}</div>
                <div>{date}</div>
                <div>{doctor}</div>
                <div>{result}</div>
            </div>
            )
        })
    }

    render() {
        return (
           <div id="personnalInfos-container">
               {this.renderExams()}
           </div>
        )
    }
}

export default Exams;