import React from 'react'
import ReactDOM from 'react-dom';

class Data extends React.Component {
   constructor() {
   super();

        this.state = {
            type: '',
            cup:'',
            bottle: '',
            drinks: '',
            knife: '',
            fork: '',
            plate:'',
            straw: ''
        }

   }

    handleCup = (e) => {
        this.setState({
            cup: e.target.value
        })

    }

    handleBottle = (e) => {
        this.setState({
            bottle: e.target.value
        })

    }

    handleDrinks = (e) => {
        this.setState({
            drinks: e.target.value
        })

    }

    handleKnife = (e) => {
        this.setState({
            knife: e.target.value
        })

    }

    handleFork = e => {
        this.setState({
            fork: e.target.value
        })
    }

    handlePlate = e => {
        this.setState({
            plate: e.target.value
        })
    }

    handleStraw = e => {
        this.setState({
            straw: e.target.value
        })
    }

    handleType = e => {
        this.setState({
            type: e.target.value
        })
    }

   render(){
     return (
            <div className="data">
             <section className="container">
                 <form onSubmit={this.handleSubmit}>
                     <fieldset>
                         <legend>Napoje</legend>
                            <input type="checkbox" name="cup" value="cup" onChange={this.handleCup} />
                         <label htmlFor="cup"> Kubeczki </label><br/>

                         <input type="checkbox" name="bottle" value="bottle" onChange={this.handleBottle} />
                            <label htmlFor="bottle"> Butelki 0.5l </label><br/>

                         <input type="checkbox" name="drinks" value="drinks" onChange={this.handleDrinks}  />
                         <label htmlFor="drinks"> Gorące napoje</label>
                         <br/>
                     </fieldset>

                     <fieldset>
                         <legend>Sztuczcze</legend>
                         <input type="checkbox" name="knife" value="knife" onChange={this.handleKnife} />
                            <label htmlFor="knife">Noże</label>
                         <br/>

                         <input type="checkbox" name="fork" value="fork" onChange={this.handleFork} />
                            <label htmlFor="fork">Widelce</label>
                         <br/>

                         <input type="checkbox" name="plate" value="plate" onChange={this.handlePlate} />
                            <label htmlFor="plate">Talerze</label>
                         <br/>

                         <input type="checkbox" name="straw" value="straw" onChange={this.handleStraw} />
                            <label htmlFor="straw">Słomki</label>
                         <br/>
                     </fieldset><br/>

                     <select id="type" value={this.state.type} onChange={this.handleType}>
                         <option>Bufet</option>
                         <option>Foodtruck</option>
                         <option>Serwis</option>
                     </select><br/>

                     <button type="submit">Click</button>

                 </form>
             </section>
            </div>
     )
   }
 }

 export default Data

