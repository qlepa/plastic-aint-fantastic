import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import Data from './Components/Data'

class App extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
         <Data/>
     )
   }
 }


ReactDOM.render(<App />, document.getElementById('root'));