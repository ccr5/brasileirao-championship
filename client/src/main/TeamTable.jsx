import React, { Component } from 'react'

export default class TeamTable extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Total R$</th>
          </tr>
        </thead>
        <tbody id="teamsResults">
          {
            this.props.teams.map((team, key) => {
              return (
                <tr key={team.id}>
                  <td>{team.id}</td>
                  <td>{team.name}</td>
                  <td>{team.bets}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}
