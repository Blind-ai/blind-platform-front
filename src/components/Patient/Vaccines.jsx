import React from 'react';

class Vaccines extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            vaccines : props.vaccines
        }
    }
}