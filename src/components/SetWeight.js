import React, { Component } from 'react';

class SetWeight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: '45',
            reps: '5',
            salesBtn: ''
        }
        this.onFormSbumit = this.onFormSbumit.bind(this)
    }
    onFormSbumit = (event) => {
        event.preventDefault();

        this.props.setWeightReps(this.state.weight, this.state.reps)
    }
    render() {
        return (
            <div>
                <h2>Body Weight/ Max reps</h2>
                <input
                    type="number"
                    placeholder="lbs"
                    className="weight"
                    value={this.state.weight}
                    onChange={(e) => this.setState({ weight: e.target.value })}
                />
                <h2>Reps Per Set</h2>
                <input
                    type="number"
                    placeholder="reps"
                    className="reps"
                    value={this.state.reps}
                    onChange={(e) => this.setState({ reps: e.target.value })}
                />
                <button onClick={this.onFormSbumit}>Start</button>

            </div>
        );
    }
}

export default SetWeight;