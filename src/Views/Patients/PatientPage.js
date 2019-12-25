import React from "react";
import {withRouter} from 'react-router-dom';

class PatientPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.location.state.name
        }
    }

    componentWillMount()
    {
        // when params sent via url
        if (this.props.location.state)
        {
            console.log("HEY")
            let params = this.props.history.location.state;
            this.setState({ params });
        }
    }

    render() {
        return (
            <div>
                This is patient {this.state.name}
            </div>
        )
    }
}

export default withRouter(PatientPage);
