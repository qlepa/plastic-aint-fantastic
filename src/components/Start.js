import React, {Component} from 'react';

class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: null,
            participants: 0,
            duration: 0
        }
    }
    handleName = e => {
        this.setState({
            projectName: e.target.value
        })
    }
    handleParticipants = e => {
        this.setState({
            participants: e.target.value
        })
    }
    handleDuration = e => {
        this.setState({
            duration: e.target.value
        })
    }
    handleClick = e => {
        this.props.setStage('Data')
        this.props.getStart(this.state.projectName, this.state.participants, this.state.duration)
    }
    render() {
        return (
            <div className="start">
            <section className="container">
                <h1>Plastic ain't fantastic</h1>
                <h2>Event Generator</h2>
                <form>
                    <label htmlFor="name">Name your project:</label><br/>
                    <input type="text" name="name" id="name" onChange={this.handleName}/><br/>
                    <label htmlFor="participants">How many person?</label><br/>
                    <input type="number" name="participants" id="participants" min="0" onChange={this.handleParticipants}/><br/>
                    <label htmlFor="duration">How long? (hours)</label><br/>
                    <input type="number" name="duration" id="duration" min="0" onChange={this.handleDuration}/><br/>
                    <button onClick={this.handleClick}>Go plan!</button>
                </form>
            </section>
            </div>

        )
    }
}

export default Start;