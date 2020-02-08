import React, { useState } from "react";
import './SearchExams.css';
import searchlogo from "../../assets/search.svg";
import PatientExamResults from "../../components/Search/PatientExamResults";

function SearchExams() {
  const [searchTag, setSearchTag] = useState('');

  return (
    <div id="search-exams-container">
      <div id="input-container">
        <input type="text" placeholder="Rechercher un patient..." onChange={e => setSearchTag(e.target.value)} />
        <img alt="" src={searchlogo} />
      </div>
      <div id="filters-container">
        <div className="filter">
          Poumouns
        </div>
        <div className="filter">
          Peau
        </div>
      </div>

      <div id="results-container">
        <PatientExamResults searchTag={searchTag} />
      </div>

    </div>
  )
}

export default SearchExams;