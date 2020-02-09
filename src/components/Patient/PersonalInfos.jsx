import React from "react";
import './PersonalInfos.css'

const PersonalInfos = ({infos}) => {

  // TODO a remplacer avec des grids
  return (
    <div id="personnalInfos-container">
      <div id="personal-infos-row">
        <div id="info-container">
          <div className="info">Prénoms :</div>
          <div className="info-data">
            {infos.firstname}
          </div>
        </div>
        <div id="info-container">
          <div className="info">Nom de Famille :</div>
          <div className="info-data">
            {infos.lastname}
          </div>
        </div>
        <div id="info-container">
          <div className="info">Nom Marital :</div>
          <div className="info-data">{infos.marital}</div>
        </div>
      </div>
    </div>

  );
}

export default PersonalInfos