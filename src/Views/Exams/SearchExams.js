import React from "react";
import './SearchExams.css';
import searchlogo from "../../assets/search.svg";
import PatientExamResults from "../../components/Search/PatientExamResults";

class SearchExams extends React.Component {
    constructor(props) {
        super(props);
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
          <div id="search-exams-container">
            <div id="input-container">

              <input type="text" placeholder="Rechercher un patient..." value={this.state.value} onChange={e => this.handleChange(e)} />
              <img src={searchlogo} />

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
              <PatientExamResults searchTag={this.state.searchTag} />
            </div>

          </div>
        );
    }


}

export default SearchExams;