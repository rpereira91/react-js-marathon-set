import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default class DisplayStats extends Component {


    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    Total Reps: {this.props.currentStats.bodyWeight}
                    <br></br>
                    Max reps/set: {this.props.currentStats.maxReps}
                    </Col>
                    <Col>
                    Reps Done: {this.props.currentStats.repsDone}
                    <br></br>
                    Approx. Sets: {this.props.currentStats.setsLeft}
                    </Col>
                </Row>

            </Container>
        )
    }
}
