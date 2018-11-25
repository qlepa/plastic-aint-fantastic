import React from 'react'

class Data extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: this.props.type,
            cup: '',
            bottle: '',
            drinks: '',
            knife: '',
            fork: '',
            plate: '',
            straw: '',

            displayCup: "none",
            displayBottle: "none",
            displayDrink: "none"
        }

    }


    handleCup = (e) => {
        this.setState({
            cup: e.target.value,
            displayCup: this.state.displayCup === "inline-block" ? "none" : "inline-block"
        })

    }

    handleBottle = (e) => {
        this.setState({
            bottle: e.target.value,
            displayBottle: this.state.displayBottle === "inline-block" ? "none" : "inline-block"
        })
    }

    handleDrinks = (e) => {
        this.setState({
            drinks: e.target.value,
            displayDrink: this.state.displayDrink === "inline-block" ? "none" : "inline-block"
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
        this.props.setStage('Summary')
        this.props.getData(this.state.type, this.state.cup, this.state.bottle, this.state.drinks, this.state.knife, this.state.fork, this.state.plate, this.state.straw)
    }
    render() {
        return (
            <div className="data">
            <section className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Select elements</h1>
                    <fieldset>
                        <legend>Beverages</legend>
                        <input type="checkbox" name="cup" value="1" onChange={this.handleCup}/>
                        <label htmlFor="cup"> Cups </label><br/>

                        <input type="checkbox" name="bottle" value="1" onChange={this.handleBottle}/>
                        <label htmlFor="bottle"> Bottles 0.5l </label><br/>

                        <input type="checkbox" name="drinks" value="1" onChange={this.handleDrinks}/>
                        <label htmlFor="drinks"> Coffee</label>
                        <br/>
                    </fieldset>

                    <fieldset>
                        <legend>Cuttlery</legend>
                        <input type="checkbox" name="knife" value="1" onChange={this.handleKnife}/>
                        <label htmlFor="knife">Knives</label>
                        <br/>

                        <input type="checkbox" name="fork" value="1" onChange={this.handleFork}/>
                        <label htmlFor="fork">Forks</label>
                        <br/>

                        <input type="checkbox" name="plate" value="1" onChange={this.handlePlate}/>
                        <label htmlFor="plate">Plates</label>
                        <br/>

                        <input type="checkbox" name="straw" value="1" onChange={this.handleStraw}/>
                        <label htmlFor="straw">Straws</label>
                        <br/>
                    </fieldset>
                    <br/>

                    {/*<img src="https://i.imgur.com/C6SJsjH.png" style={{width:"35px", display: this.state.displayCup}}/>*/}
                    {/*<img src="https://i.imgur.com/49Yu40x.png" style={{width:"35px", display: this.state.displayBottle}}/><br/>*/}
                    {/*<img src="https://i.imgur.com/6Ps51Jc.png" style={{width:"35px", display: this.state.displayDrink}}/><br/>*/}

                    <select id="type" value={this.state.type} onChange={this.handleType}>
                        <option>Bufet</option>
                        <option>Foodtruck</option>
                        <option>Serwis</option>
                    </select><br/>

                    <button onClick={this.handleClick}>Go</button>

                </form>
            </section>
            </div>
        )
    }
}


 export default Data;

