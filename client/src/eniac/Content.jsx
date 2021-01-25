import React, { Component } from 'react'
import EniacForm from './EniacForm'
import Progress from './Progress'

export default class Content extends Component {

  render() {
    return (
      <div id="content">
        <p>
          Introducing "DApp Token" (DAPP)!
          Token price is <span className="token-price"></span> Ether. You currently have <span className="dapp-balance"></span>&nbsp;DAPP.
        </p>
        <br />
        <EniacForm />
        <Progress />
        <p><span className="tokens-sold"></span> / <span className="tokens-available"></span> tokens sold</p>
        <hr />
        <p id="accountAddress"></p>
      </div>
    )
  }
}