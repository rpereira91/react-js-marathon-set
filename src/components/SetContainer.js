import React, { Component } from 'react'
import DisplaySet from './DisplaySet';
import { Container } from 'react-bootstrap';

import './style/main.css';
export default class SetContainer extends Component {
    render() {
        return (
            <Container>
                    {this.props.log.map((l) =>
                        <div id='samples'>
                            <DisplaySet currentSet={l} />
                            <br></br>
                        </div>
                    )}
            </Container>
        )
    }
}
