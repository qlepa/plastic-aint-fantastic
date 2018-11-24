import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

class App extends Component {
   constructor(props) {
   super(props);
    this.state= {
        status: "Start"
    }
   }
   render(){
       switch ( this.state.status) {
           case "Start":
               return (
                   <div>
                       Hello
                   </div>
               )
       }

   }
 }


ReactDOM.render(<App />, document.getElementById('root'));