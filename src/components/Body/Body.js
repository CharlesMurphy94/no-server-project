import React, {Component} from 'react'
import Card from './Card/Card'
import {getPlanets} from '../../services/swapi'
export default class Body extends Component{
   constructor(){
        super()
        this.state = {
        planets: [],
        }
    } 
    componentDidMount(){
        getPlanets().then(response=>{
            this.setState({planets:response.results})

        })
    }
    render(){
        let cards = this.state.planets.map((e,i)=>( i < 8?
            <Card index={i} 
                  planet={e} 
            />
            : null
        ))
        return(
            <div className="Body">
                {cards}
            </div>
        )
    }


}
