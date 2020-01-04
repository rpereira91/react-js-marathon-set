import React, { Component } from 'react';
import './style/container.css'
class DisplaySet extends Component {
    render() {
        return (
            <div id="container">
                <br></br>
                <table>
                    <th>
                        Set:
                        {this.props.currentSet.set}
                    </th>
                    <th>
                        Reps:
                        {this.props.currentSet.reps}
                    </th>
                </table>
            </div>
        );
    }
}

export default DisplaySet;