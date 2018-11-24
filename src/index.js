import React from 'react';
import ReactDOM from 'react-dom';
import '/home/klepa/Desktop/no/src/scss/main.scss';

class App extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
         <div>Hellooooo</div>

     )
   }
 }


ReactDOM.render(<App />, document.getElementById('root'));