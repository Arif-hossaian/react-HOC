import React, { Component } from 'react'
import WithCounter from "./WithCounter"

 class ClickCounter extends Component {

  
    render() {

        const {count,Increment} = this.props
        return (
            <div>
                <button onClick={Increment}>{this.props.name} click {count} time</button>
            </div>
        )
    }
}

export default WithCounter(ClickCounter,1)
