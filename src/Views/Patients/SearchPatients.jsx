import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import api from '../../utils/api';
import './SearchPatients.css'
import searchlogo from '../../assets/search.svg'
import PatientsSearchResults from "../../components/Search/PatientsSearchResults";
import { getPatients } from '../../store/actions';


const SearchPatients = () => {
  const [searchTag, setSearchTag] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatients());
  }, [dispatch]);

  const resp = useSelector((store) => store.patientsReducer);

  return (
    <div id="search-patients-container">
      <div id="input-container">
        <input type="text" placeholder="Rechercher un patient..." onChange={e => setSearchTag(e.target.value)} />
        <img alt="" src={searchlogo} />
      </div>
      <div id="results-container">
        <PatientsSearchResults searchTag={searchTag} patients={resp.patients} />
      </div>
    </div>
  )
};

export default SearchPatients;