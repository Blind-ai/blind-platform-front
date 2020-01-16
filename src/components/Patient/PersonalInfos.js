import React from "react";
import './PersonalInfos.css'

class PersonalInfos extends React.PureComponent{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="personnalInfos-container">
                <div id="personal-infos-row">
                    <div id="info-container">
                        <div className="info">Prénoms : </div>
                        <div className="info-data"> Nathalie, Florence</div>
                    </div>
                    <div id="info-container">
                        <div className="info">Nom de Famille : </div>
                        <div className="info-data"> Dubois</div>
                    </div>
                    <div id="info-container">
                        <div className="info">Nom Marital : </div>
                        <div className="info-data"> /</div>
                    </div>
                </div>
                <div id="personal-infos-row">
                    <div id="info-container">
                        <div className="info">Prénoms : </div>
                        <div className="info-data"> Nathalie, Florence</div>
                    </div>
                    <div id="info-container">
                        <div className="info">Nom de Famille : </div>
                        <div className="info-data"> Dubois</div>
                    </div>
                    <div id="info-container">
                        <div className="info">Nom Marital : </div>
                        <div className="info-data"> /</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default PersonalInfos