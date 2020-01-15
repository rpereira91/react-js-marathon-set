import React, { Component } from 'react';
import './style/main.css';
import { Card } from 'react-bootstrap';


class DisplaySet extends Component {
    render() {
        return (
            <div className="set-display">
                <Card bg="dark" text="white">
                    <Card.Body>
                        <Card.Title>Set: {this.props.currentSet.set}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> Reps: {this.props.currentSet.reps}</Card.Subtitle>
                        <Card.Text>
                           
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
        );
    }
}

export default DisplaySet;