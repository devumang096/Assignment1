import React, { Component } from 'react'
import DisplayCounter from './DisplayCounter';

export default class CounterControler extends Component {
  
    constructor(){
        super()
        this.state = {
            value : 0 
        }
    }
  
    inc = () =>{
     this.setState({value : this.state.value+1})
  }

  dec = () => {
    this.setState({value : this.state.value - 1 })
  }
render() {
    //let value = 0
    console.log("render.......")
    return (
      <div>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}