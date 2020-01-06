import React, { Component } from 'react';
import './style/main.css';

class DisplaySet extends Component {
    render() {
        return (
            <div id="set-display">
                <p>
                        Set:
                        {this.props.currentSet.set} &nbsp;
                        Reps:
                        {this.props.currentSet.reps}
                </p>
            </div>
        );
    }
}

export default DisplaySet;