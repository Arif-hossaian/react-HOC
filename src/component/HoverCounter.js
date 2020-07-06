import React, { Component } from 'react'
import WithCounter from "./WithCounter"

 class HoverCounter extends Component {

    
    render() {

        const {count, Increment} = this.props
        return (
            <div>
                <h2 onMouseOver={Increment}>{this.props.name} hover {count} time</h2>
            </div>
        )
    }
}

export default WithCounter(HoverCounter,1)
