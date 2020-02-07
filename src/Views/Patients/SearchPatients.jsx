import React, {useState} from "react";
import './SearchPatients.css'
import searchlogo from '../../assets/search.svg'
import PatientsSearchResults from "../../components/Search/PatientsSearchResults";

function SearchPatients() {
    const [searchTag, setSearchTag] = useState('');

    return (
      <div id="search-patients-container">
        <div id="input-container">
          <input type="text" placeholder="Rechercher un patient..." onChange={e => setSearchTag(e.target.value)} />
          <img alt="" src={searchlogo} />
        </div>
        <div id="results-container">
          <PatientsSearchResults searchTag={searchTag} />
        </div>
      </div>
    )
}

export default SearchPatients;