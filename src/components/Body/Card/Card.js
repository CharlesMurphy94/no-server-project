import React, {Component} from 'react'
// import {getPlanets} from '../../../services/swapi'

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
        planet: props.planet,
        planetName: props.planet.name,
        planetIndex: props.index,
        card: 'card',
        showbutton: 'hide-terminate',
        powerbar: 'power-hide',
        remaining: 8,
        victory:'no-victory'
        }
        this.numShorten = this.numShorten.bind(this);
        this.blowUp = this.blowUp.bind(this);
        this.wipe = this.wipe.bind(this);
        this.showTerminate = this.showTerminate.bind(this);
        this.hideTerminate = this.hideTerminate.bind(this);
        // this.checkRemaining = this.checkRemaining.bind(this);
    }
        
    //     const unknownScapes = ["cityscape, mountains","glaciers, mountains, ice canyons","mountains, fields, forests, rock arches","caves, desert, mountains, volcanoes","terrain", "grass", "urban, oceans, swamps, bogs"    
    // ]
    //     return unknownScapes
    // }

    numShorten = function(num){
    var str;
    num === 'unknown'? str = num :
	num.toString(10).length > 12 ? 
	str= `${num.toString(10).slice(0, -12)} Trillion`: 
	num.toString(10).length > 9 ? 
	str= `${num.toString(10).slice(0, -9)} Billion`: 
	num.toString(10).length > 6 ? 
	str= `${num.toString(10).slice(0, -6)} Million`: 
	num.toString(10).length > 3 ? 
    str= `${num.toString(10).slice(0, -3)} Thousand`:
    str=num.toString(10);	
	return str
    }

    blowUp = function(){
        this.setState({powerbar: 'power-on'});
        setTimeout(()=>{this.setState({
            planetName: `BlowUp${this.state.planetName}`,
            showbutton: 'hide',
            powerbar: 'power-hide'
        })
        this.wipe()},2800)
        
    }
    wipe = function(){
        setTimeout(()=>{
            this.setState({
                card:'Blown',
                remaining: this.state.remaining - 1});
            
            },7700)
    }
    showTerminate = function(){
        this.setState({showbutton:'terminate'})
    }
    hideTerminate = function(){
        this.setState({showbutton:'hide-terminate'})
    }
    // checkRemaining = function(){
    //     if(this.state.remaining === 0) {
    //         this.setState({victory: 'victory'})
    //     }
    // }
    render(){
        return(
                <div className={this.state.card}>
                    
                    <div className={this.state.planetName.split(' ').join('')}
                        alt={`${(this.state.planet.name).split(' ').join('')} img`}
                        onMouseOver={this.showTerminate} onMouseOut={this.hideTerminate}>
                        
                        <h1 className="card-text">{this.state.planet.name}</h1>
                        
                        <ul className="card-text">
                            <li>
                                <span className="bold">Population: </span>
                                <span>{this.numShorten(this.state.planet.population)}</span>

                            </li>
                            <li>
                                <span className="bold">Terrain: </span>
                                <span>{this.state.planet.terrain}</span>

                            </li>
                            <li>
                                <span className="bold">Climate: </span>
                                <span>{this.state.planet.climate}</span>
                            </li>
                        </ul>

                        

                    </div>
                    <div className={this.state.showbutton} onClick={this.blowUp} onMouseOver={this.showTerminate}>
                            <p>Terminate</p>
                    </div>
                    <div className={this.state.powerbar}>
                    </div>
                </div>
                

        )
    }

}
export default Card