import React, { Component } from 'react'
import CounterControler from './CounterControler'

export default class DisplayCounter extends Component {
    count = 0
  render() {
    return (
      <div>
        <h1>Counter : {this.count}</h1>
        <h4>Click + for Increment / Click - for Decrement</h4>
        <CounterControler></CounterControler>
      </div>
    )
  }
}