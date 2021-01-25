import React, { Component } from 'react'
import TeamTable from './TeamTable'
import Form from './Form'

export default class MainPage extends Component {

  constructor(props) {
    super(props)
    this.state = { msg: "Oi" }
  }

  sendBet = (teamId) => {
    this.props.bet(teamId)
  }

  render() {
    return (
      <div id="content">
        <TeamTable teams={this.props.teams} />
        <Form bet={this.sendBet} teams={this.props.teams} />
        <p className="text-center"> Your account: {this.props.account}</p>
      </div>
    )
  }
}
