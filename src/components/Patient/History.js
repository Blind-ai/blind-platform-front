import React from "react";
import './PersonalInfos.css'

class History extends React.PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            history: props.history
        }
    }

    renderData() {
        return this.state.history.map((element, id) => (
            <div id="personnalInfos-container" key={id}>
                <div id="personal-infos-row">
                    <div id="info-container">
                        <div className="info">Type : </div>
                        <div className="info-data"> {element.type}</div>
                    </div>
                    <div id="info-container">
                        <div className="info">Date : </div>
                        <div className="info-data"> {element.date}</div>
                    </div>
                    <div id="info-container">
                        <div className="info">Docteur : </div>
                        <div className="info-data"> {element.doctor}</div>
                    </div>
                </div>
            </div>
        ))
    }


    render() {
        return (
           this.renderData()
        );
    }
}

export default History;