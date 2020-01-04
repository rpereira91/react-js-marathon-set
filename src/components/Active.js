import React, { Component } from 'react';

class Active extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completedReps: '', 
            currentSet: this.props.currentSet
        }
        this.onFormSbumit = this.onFormSbumit.bind(this)
    }
    onFormSbumit = (event) => {
        event.preventDefault();

        // this.props.setWeightReps(this.state.weight, this.state.reps)
        let current = {
            "set":this.state.currentSet,
            "reps":this.state.completedReps
        }
        this.props.addSet(current);
        this.props.startRest();
    }
    render() {
        return (
            <div>
                <h2>Current goal: {this.props.reps}</h2>
                <h2>Current Set: {this.props.currentSet}</h2>
                <input
                    type="number"
                    placeholder="Done"
                    className="reps"
                    value={this.state.completedReps}
                    onChange={(e) => this.setState({ completedReps: e.target.value })}
                />
                <button onClick={this.onFormSbumit}>Complete</button>
            </div>
        );
    }
}

export default Active;