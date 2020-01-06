import React, { Component } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import "./style/main.css"
class SetWeight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxReps: 50,
            reps: 5,
            rest: 40,
            salesBtn: ''
        }
        this.onFormSbumit = this.onFormSbumit.bind(this)
    }
    onFormSbumit = (event) => {
        event.preventDefault();

        this.props.setWeightReps(this.state.maxReps, this.state.reps, this.state.rest)
    }
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            <h3 className="set-label">
                                Total reps
                            </h3>
                        </Form.Label>
                        <Col sm={2}>
                            <Form.Control
                                type="number"
                                placeholder="lbs"
                                className="maxReps"
                                value={this.state.maxReps}
                                size='sm'
                                onChange={(e) => this.setState({ maxReps: e.target.value })}
                            />
                        </Col>
                        <br></br>
                        <Form.Label column sm={2}>
                            <h3 className="set-label">
                                Reps Per Set
                            </h3>
                        </Form.Label>
                        <Col sm={2}>

                            <Form.Control
                                type="number"
                                placeholder="reps"
                                className="reps"
                                value={this.state.reps}
                                size='sm'
                                onChange={(e) => this.setState({ reps: e.target.value })}
                            />
                        </Col>
                        <Form.Label column sm={2}>
                            <h3 className="set-label">
                                Rest
                            </h3></Form.Label>
                        <Col sm={2}>
                            <Form.Control
                                type="number"
                                placeholder="seconds"
                                className="workoutRest"
                                value={this.state.rest}
                                size='sm'
                                onChange={(e) => this.setState({ rest: e.target.value })}
                            />
                        </Col>
                    </Form.Group>
                    <Button onClick={this.onFormSbumit}>Start</Button>

                </Form>
            </Container>
        );
    }
}

export default SetWeight;