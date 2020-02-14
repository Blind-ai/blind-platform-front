import React from "react";
import './PersonalInfos.css'

const History = ({history}) => {
  function renderData() {
    if (history.length === 0)
      return <div className="info-data">Vide</div>
    return history.map((element, id) => (
      // eslint-disable-next-line react/no-array-index-key
      <div id="personnalInfos-container" key={id}>
        <div id="personal-infos-row">
          <div id="info-container">
            <div className="info">Type : </div>
            <div className="info-data">
              {' '}
              {element.name}
            </div>
          </div>
          <div id="info-container">
            <div className="info">Date : </div>
            <div className="info-data">
              {' '}
              {element.date}
            </div>
          </div>
        </div>
      </div>
    ))
  }

  return (
    renderData()
  );
};


export default History;