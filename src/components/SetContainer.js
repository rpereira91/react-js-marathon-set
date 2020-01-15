import React, { Component } from 'react'
import DisplaySet from './DisplaySet';
import { Container, Carousel } from 'react-bootstrap';

import './style/main.css';
export default class SetContainer extends Component {
    render() {
        return (
            <Container>
                <Carousel interval={null}>
                    {this.props.log.map((l) =>
                        <Carousel.Item>
                            <div>
                                <DisplaySet currentSet={l} />
                                <br></br>
                            </div>
                        </Carousel.Item>
                    )}
                </Carousel>
            </Container>
        )
    }
}
