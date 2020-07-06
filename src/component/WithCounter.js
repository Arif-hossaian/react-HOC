import React from "react"

const WithCounter = (WrappComponent, incremantNumber) =>{
    class WithCounter extends React.Component{

        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        Increment =() =>{
            this.setState( prevState =>{
                return{count: prevState.count + incremantNumber}
            })
        }
        render(){
            return <WrappComponent 
             count ={this.state.count} 
             Increment = {this.Increment}
                 {...this.props}
             />
        }
    }
    return WithCounter
}
export default WithCounter