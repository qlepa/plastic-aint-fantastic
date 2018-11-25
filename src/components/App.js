import React, {Component} from 'react';
import Start from "./Start";

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            status: "Start",
            projectName: null,
            participants: null,
            duration: null
        }
    }
    setStage = (stageName) => {
        this.setState({
            status: stageName
        })
    }
    getStart = (projectName, participants, duration ) => {
        this.setState({
            projectName: projectName,
            participants: participants,
            duration: duration
        })
    }
    render(){
        switch ( this.state.status) {
            case "Start":
                return (
                    <div>
                        <Start setStage={this.setStage} getStart={this.getStart}/>
                    </div>
                )
            case "Data":
                return (
                    <div>
                        <h3>
                            {this.state.projectName}
                            {this.state.participants}
                            {this.state.duration}
                        </h3>
                    </div>
                )
        }

    }
}


export default App;