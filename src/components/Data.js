import React from 'react'

class Data extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            cup: '',
            bottle: '',
            drinks: '',
            knife: '',
            fork: '',
            plate: '',
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
    handleClick = e => {
        console.log(this.state.straw);
        this.props.setStage('Summary')
        this.props.getData(this.state.type, this.state.cup, this.state.bottle, this.state.drinks, this.state.knife, this.state.fork, this.state.plate, this.state.straw)
    }
    render() {
        return (

            <section className="container">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Napoje</legend>
                        <input type="checkbox" name="cup" value="1" onChange={this.handleCup}/>
                        <label htmlFor="cup"> Kubeczki </label><br/>

                        <input type="checkbox" name="bottle" value="1" onChange={this.handleBottle}/>
                        <label htmlFor="bottle"> Butelki 0.5l </label><br/>

                        <input type="checkbox" name="drinks" value="1" onChange={this.handleDrinks}/>
                        <label htmlFor="drinks"> Gorące napoje</label>
                        <br/>
                    </fieldset>

                    <fieldset>
                        <legend>Sztuczcze</legend>
                        <input type="checkbox" name="knife" value="1" onChange={this.handleKnife}/>
                        <label htmlFor="knife">Noże</label>
                        <br/>

                        <input type="checkbox" name="fork" value="1" onChange={this.handleFork}/>
                        <label htmlFor="fork">Widelce</label>
                        <br/>

                        <input type="checkbox" name="plate" value="1" onChange={this.handlePlate}/>
                        <label htmlFor="plate">Talerze</label>
                        <br/>

                        <input type="checkbox" name="straw" value="1" onChange={this.handleStraw}/>
                        <label htmlFor="straw">Słomki</label>
                        <br/>
                    </fieldset>
                    <br/>

                    <select id="type" value={this.state.type} onChange={this.handleType}>
                        <option>Bufet</option>
                        <option>Foodtruck</option>
                        <option>Serwis</option>
                    </select><br/>

                    <button onClick={this.handleClick}>Go</button>

                </form>
            </section>
        )
    }
}


 export default Data;

