import React, {Component} from 'react'

export default class Header extends Component{
    constructor(){
        super()
        this.startOver = this.startOver.bind(this)
        // this.checkRemaining = this.checkRemaining.bind(this);
    }

    startOver = function(){
        window.location.reload();
    }
    render(){
        return(
            <div className="main-header">
                <h1 className="app-name">Death Star Command Center</h1>
                <div className="header-links">
                    <div className="start-over" onClick={this.startOver}>
                        <p>Start Over</p>
                    </div>
                </div>
            </div>
        )
    }

}
