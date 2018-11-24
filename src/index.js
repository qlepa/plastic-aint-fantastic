import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import SummaryCalc from "./components/summary"

class App extends Component {
   constructor(props) {
   super(props);
    this.state= {
        status: "Start",
        cups: 1,
        fork: 0,
        knives: 0,
        plates: 0,
        straws: 150,
        bottles: 30,
        kilos: 150,
        party: 'bufet',
        ppl: 3,
        hours: 3

    }
   }
   render(){
       switch (this.state.status) {
           case "Start":
               return (
                   <SummaryCalc data={this.state}/>
               )
       }

   }
 }


ReactDOM.render(<App />, document.getElementById('root'));