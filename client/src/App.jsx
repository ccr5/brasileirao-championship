import React, { Component } from "react"
import BrasileiraoContract from "./contracts/Brasileirao.json"
import Header from "./structure/Header"
import Footer from "./structure/Footer"
import getWeb3 from './getWeb3'
import "./App.css"

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      account: '',
      teams: [],
      selectedTeam: null,
      loading: true
    }
  }

  componentDidMount = () => {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = BrasileiraoContract.networks[networkId];
    const brasileirao = new web3.eth.Contract(
      BrasileiraoContract.abi,
      deployedNetwork && deployedNetwork.address,
    );

    this.setState({
      brasileirao,
      account: accounts[0],
    })

    const teamsCount = await this.state.brasileirao.methods.teamsCount().call()
    
    for (let i = 1; i <= teamsCount; i++) {
      const team = await this.state.brasileirao.methods.teams(i).call()
      this.setState({
        teams: [...this.state.teams, team]
      })
    }

    this.setState({ loading: false })
  }

  getTeam = (e) => {
    e.preventDefault()
    this.setState({
      selectedTeam: +e.target.value
    })
  } 

  bet = async (e) => {
    e.preventDefault()
    await this.state.brasileirao.methods.bet(this.state.selectedTeam).send({ from: this.state.account })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid" style={{height: this.state.height - 80}}>
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center">Top candidatos - Vencedor do brasileirão 2021</h1>
              <hr/><br/>
              {
                this.state.loading ?
                <div id="loading">
                <p>Loading...</p>
              </div> :
              <div id="content"> 
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
                      this.state.teams.map((team, key) => {
                        return (
                          <tr>
                            <td>{key + 1}</td>
                            <td>{team.name}</td>
                            <td>{team.betValue}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
                <form>
                  <div className="form-group">
                    <label htmlFor="teamsSelect">Selecione o time: </label>
                    <select className="form-control" id="teamsSelect" onChange={(e) => { this.getTeam(e)}}> 
                    {
                      this.state.teams.map((team, key) => {
                        return (<option value={team.id}>{team.name}</ option>)
                      })
                    }
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={(e) => {this.bet(e)}}>Bet</button>
                  <hr />
                </form>
                <p className="text-center"> Your account: {this.state.account}</p>
              </div>
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
