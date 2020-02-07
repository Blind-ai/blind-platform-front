import React from "react";
import './SearchPatients.css'
import ObjectList from 'react-object-list'
import searchlogo from '../../assets/search.svg'
import PatientsSearchResults from "../../components/Search/PatientsSearchResults";

class SearchPatients extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTag: ''
        }
    }


    async handleChange(event) {
        console.log(event.target.value)

        await this.setState({searchTag: event.target.value})

    }

    render() {
        return (
          <div id="search-patients-container">
            <div id="input-container">
              <input type="text" placeholder="Rechercher un patient..." value={this.state.value} onChange={e => this.handleChange(e)} />
              <img src={searchlogo} />
            </div>

            <div id="results-container">
              <PatientsSearchResults searchTag={this.state.searchTag} />
            </div>

          </div>
        )
    }
}

export default SearchPatients;