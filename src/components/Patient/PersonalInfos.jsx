import React from "react";
import './PersonalInfos.css'

class PersonalInfos extends React.PureComponent{
    constructor(props) {
        super(props);

        this.state = {
            infos : props.infos
        }
    }


    // TODO a remplacer avec des grids
    render() {
        return (
          <div id="personnalInfos-container">
            <div id="personal-infos-row">
              <div id="info-container">
                <div className="info">Prénoms : </div>
                <div className="info-data"> 
                  {' '}
                  {this.state.infos.firstname}
                </div>
              </div>
              <div id="info-container">
                <div className="info">Nom de Famille : </div>
                <div className="info-data"> 
                  {' '}
                  {this.state.infos.lastname}
                </div>
              </div>
              <div id="info-container">
                <div className="info">Nom Marital : </div>
                <div className="info-data">{this.state.infos.marital}</div>
              </div>
            </div>

          </div>

        );
    }
}

export default PersonalInfos