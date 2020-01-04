import React, { Component } from 'react'
import DisplaySet from './DisplaySet';
import './style/container.css';
export default class SetContainer extends Component {
    render() {
        return (
            <div>
                <table id="samples" >

                    {this.props.log.map((l) =>
                        <th>
                            <div>
                                <DisplaySet currentSet={l} />
                            </div>
                        </th>
                    )}
                </table>
            </div>
        )
    }
}
