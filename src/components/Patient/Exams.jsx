import React from "react";
import './Exams.css'

class Exams extends React.PureComponent {
    constructor(props) {
        super(props);

        console.log(props.id)
        console.log(props)

        this.state = {
            exams : props.exams,
            id: props.id
        }
    }


    componentWillReceiveProps(props) {
        this.setState({
            exams: props.exams
        })
    }


        renderExams() {
        if (this.state.exams.length === 0) {
            return <div id="exam-row">Vide</div>
        }
        return this.state.exams.map((exam, index) => {
            const {type, date, doctor, attachment} = exam;
            console.log(exam);

            return (
              <div key={index} id="exam-row">
                <div id="exam-info">{type}</div>
                <div>{date}</div>
                <div>{doctor}</div>
                <img src={`http://188.166.53.41:5000/${  this.state.id  }/${  attachment}`} />
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
