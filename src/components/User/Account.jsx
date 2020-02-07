import React from "react";
import './Account.css'
import pp from '../../assets/jimi.jpg'

function Account(props) {
    return (
      <a id="account-text">
        {props.name}
        <img src={pp} />
      </a>
    )

}

export default Account;