import React, { Component } from 'react'

export default class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTeam: this.props.teams[0].id
    }
  }

  getTeam = (e) => {
    this.setState({
      selectedTeam: +e.target.value
    })
  }

  saveTeamId = () => {
    this.props.bet(this.state.selectedTeam)
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="teamsSelect">Selecione o time: </label>
          <select className="form-control" id="teamsSelect" onChange={(e) => {
            e.preventDefault()
            this.getTeam(e)
          }}>
            {
              this.props.teams.map((team, key) => {
                return (<option value={team.id}>{team.name}</ option>)
              })
            }
          </select>
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => { this.saveTeamId() }}>Bet</button>
        <hr />
      </form>
    )
  }
}
