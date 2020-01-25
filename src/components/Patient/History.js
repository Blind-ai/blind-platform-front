import React from "react";
import './PersonalInfos.css'

class History extends React.PureComponent{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="personnalInfos-container">
                <div id="personal-infos-row">
                    <div id="info-container">
                        <div className="info">Type : </div>
                        <div className="info-data"> Grippe</div>
                    </div>
                    <div id="info-container">
                        <div className="info">Date : </div>
                        <div className="info-data"> 18/12/19</div>
                    </div>
                    <div id="info-container">
                        <div className="info">Docteur : </div>
                        <div className="info-data"> Girafon</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default History;