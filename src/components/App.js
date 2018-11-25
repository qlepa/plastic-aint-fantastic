import React, {Component} from 'react';
import Start from "./Start";
import Data from "./Data";

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            status: "Start",
            projectName: null,
            participants: null,
            duration: null,
            type: '',
            cup: 0,
            bottle: 0,
            drinks: 0,
            knife: 0,
            fork: 0,
            plate: 0,
            straw: 0
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
    getData = (type, cup, bottle, drinks, knife, fork, plate, straw) => {
        this.setState({
            type: type,
            cup: cup,
            bottle: bottle,
            drinks: drinks,
            knife: knife,
            fork: fork,
            plate: plate,
            straw: straw
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
                        <Data setStage={this.setStage} getData={this.getData}/>
                    </div>
                )
            case "Summary":
                return (
                    <div>
                        {this.state.cup}
                    </div>
                )
        }

    }
}


export default App;