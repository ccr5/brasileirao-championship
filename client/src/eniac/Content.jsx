import React, { Component } from 'react'
import EniacForm from './EniacForm'
import Progress from './Progress'

export default class Content extends Component {

  constructor(props) {
    super(props)
    this.state = {
      progressPercent: (Math.ceil(this.props.tokensSold) / this.props.totalSupply) * 100
    }
  }

  render() {
    return (
      <div id="content">
        <p> Token price is {`${this.props.tokenPrice}`} Ether. </p>
        <p> You currently have {`${this.props.currentBalance}`} ENIAC. </p>
        <br />
        <EniacForm buyTokens={this.props.buyTokens} />
        <Progress progress={this.state.progressPercent} />
        <p>{`${this.props.tokensSold}`} / {`${this.props.totalSupply}`} tokens sold</p>
        <hr />
        <p id="accountAddress">Your account: {this.props.account}</p>
      </div>
    )
  }
}