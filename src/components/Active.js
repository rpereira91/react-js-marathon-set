import React, { Component } from 'react';
import { Container, Button, Form, Col, Row } from 'react-bootstrap';
import './style/main.css'

class Active extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completedReps: this.props.reps,
            currentSet: this.props.currentSet
        }
        this.onFormSbumit = this.onFormSbumit.bind(this)
    }
    onFormSbumit = (event) => {
        event.preventDefault();

        // this.props.setWeightReps(this.state.weight, this.state.reps)
        let current = {
            "set": this.state.currentSet,
            "reps": this.state.completedReps
        }
        this.props.addSet(current);
        this.props.startRest();
    }
    render() {
        return (
            <Container className='active'>
                <Form>
                    <Form.Group as={Row}>
                    <Col>
                        <h2>Rep Goal: {this.props.reps}</h2>
                        <h2>Set #: {this.props.currentSet}</h2>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={2}>
                            <Form.Control
                                type="number"
                                placeholder="Done"
                                className="reps"
                                size='lg'
                                value={this.state.completedReps}
                                onChange={(e) => this.setState({ completedReps: e.target.value })}
                            />
                        </Col>
                        <Col sm={2}>

                            <Button variant="secondary" onClick={this.onFormSbumit}>Complete</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default Active;