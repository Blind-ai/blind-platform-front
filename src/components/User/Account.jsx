import React from "react";
import './Account.css'
import pp from '../../assets/jimi.jpg'

function Account(props) {
  const {name} = props;
    return (
      <p id="account-text">
        {name}
        <img alt="" src={pp} />
      </p>
    )

}

export default Account;