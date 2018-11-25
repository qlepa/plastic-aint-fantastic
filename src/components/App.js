import React, {Component} from 'react';
import Start from "./Start";
import Data from "./Data";
import SummaryCalc from "./summary"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Start",
            projectName: null,
            ppl: 0,
            duration: 0,
            party: 'Bufet',
            cups: 0,
            bottles: 0,
            drinks: 0,
            knives: 0,
            fork: 0,
            plates: 0,
            straws: 0
        }
    }

    setStage = (stageName) => {
        this.setState({
            status: stageName
        })
    };

    getStart = (projectName, participants, duration) => {
        this.setState({
            projectName: projectName,
            ppl: participants,
            duration: duration
        })
    };

    getData = (type, cup, bottle, drinks, knife, fork, plate, straw) => {
        this.setState({
            party: type,
            cups: cup,
            bottles: bottle,
            drinks: drinks,
            knives: knife,
            fork: fork,
            plates: plate,
            straws: straw
        })
    };

    render() {
        switch (this.state.status) {
            case "Start":
                return (
                    <div>
                        <Start setStage={this.setStage} getStart={this.getStart}/>
                    </div>
                );
            case "Data":
                return (
                    <div>
                        <Data setStage={this.setStage} getData={this.getData} type={this.state.party}/>
                    </div>
                );
            case "Summary":
                return (
                    <div>
                        <SummaryCalc data={this.state}/>
                    </div>
                )
        }

    }
}


export default App;