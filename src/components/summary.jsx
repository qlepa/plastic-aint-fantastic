import React from 'react';


const Summary = (props) => {

    let data = props.data;
    return (
        <section className='container'>
            <h1>Summary</h1>
            <section className='usage'>
                <ul>
                    <List data={data}/>
                </ul>
                <p>In total You'd produce {data.kilos}kg of plastic!</p>
                <p>It takes 1000 years to degrade plastic :(</p>
            </section>
            <section className='tips'>
                <h2>Few tips how to use less plastic</h2>
                <Cutle value={data}/>
                <Bottle value={data}/>
                <Straw value={data}/>
                <Cups value={data}/>
            </section>
            <section className='spending'>
                <p>You'd spent ${data.cost} on {data.kilos}kg of plastic.</p>

            </section>

        </section>
    )
};


const List = (props) => {
    const arr = Object.keys(props.data);
    let newAr = arr.map((e, i) => {
        if (arr.indexOf(e) > 6) {
            return null
        } else {
            if (props.data[e] === 0) {
                return null
            } else {
                return <li key={i}>{e} usage: {props.data[e]}</li>
            }
        }
    });
    return newAr
};


const Cutle = (props) => {
    if (props.value.fork > 0 || props.value.knives > 0 || props.value.plates > 0) {
        return <section>
            <h3>Plates & Cuttlery</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum deserunt doloremque et
                excepturi, facere, fugiat fugit harum illum impedit maxime nulla obcaecati officiis optio
                placeat quibusdam quis totam voluptatum!</p>
        </section>
    } else {
        return null
    }
}


const Bottle = (props) => {
    if (props.value.bottles > 0) {
        return <section>
            <h3>Plastic bottles</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet delectus dolores eius error
                eveniet ipsa non nostrum odit, quia. Ad at corporis dolores ipsum iusto quidem. Ducimus eius
                minus repellat!</p>
        </section>
    } else {
        return null
    }
};

const Straw = (props) => {
    if (props.value.straws > 0) {
        return <section>
            <h3>Straws</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem beatae, commodi
                delectus eum facere facilis nihil, nobis odit quae sed sit velit voluptas! Dolores dolorum id
                magni veniam. Veniam?</p>
        </section>
    } else {
        return null
    }
};

const Cups = (props) => {
    if (props.value.cups > 0) {
        return <section>
            <h3>Cups</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet expedita laborum
                molestiae quo! Aliquid aperiam at atque consequatur dignissimos, harum iusto, maxime quis quo
                quos sint soluta sunt suscipit.</p>
            <p>Check this item with extra discount: <a
                href="https://www.partybox.pl/kubeczki-papierowe-kraft-6szt?pr=58409&gclid=Cj0KCQiArenfBRCoARIsAFc1Fqd3dkQ3u344T_6XuxTcgZULYsdDBsyY2QfWv6hBJJHxLeWZRRN-76kaAvycEALw_wcB">Extra
                eco cups!</a></p>
        </section>
    } else {
        return null
    }
};


const SummaryCalc = (props) => {

    const usage = () => {
        const obj = [
            {
                cups: 0.8,
                bottles: 0.5,
                hot: 1,
                knives: 1,
                fork: 1,
                plates: 1,
                straws: 2,
            }, {
                cups: 0.2,
                bottles: 1,
                hot: 0.4,
                knives: 0.5,
                fork: 0.5,
                plates: 1,
                straws: 3,
            }, {
                cups: 0.8,
                bottles: 0.8,
                hot: 0.6,
                knives: 0.5,
                fork: 0.5,
                plates: 1,
                straws: 0.5,
            }];
        let partyTypeUsage = () => {
            switch (props.data.party) {
                case 'Bufet':
                    return obj[0];
                case 'Foodtruck':
                    return obj[1];
                case 'Serwis':
                    return obj[2];
                default:
                    console.log("nie dziala");
            }
        };
        let partyType = partyTypeUsage();
        let usageOBj = {
            cups: '',
            hot: '',
            fork: '',
            knives: '',
            plates: '',
            straws: '',
            bottles: '',
        };
        for (let key in usageOBj) {
            if (props.data[key] > 0) {
                usageOBj[key] = Math.ceil(props.data.ppl * partyType[key] * props.data.duration)
            } else {
                usageOBj[key] = 0;
            }
        }

        let kilos = 0;
        let cost = 0;

        for (let key in usageOBj) {
            kilos = Math.ceil(kilos + usageOBj[key] * 0.2);
            cost = Math.ceil(cost + usageOBj[key])
        }
        usageOBj.kilos = kilos;
        usageOBj.cost = cost;
        return usageOBj;

    };
    return (
        <Summary data={usage()}/>

    )
};


export default SummaryCalc