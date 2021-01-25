import React, { Component } from "react"
import BrasileiraoContract from "./contracts/Brasileirao.json"
import Header from "./structure/Header"
import Footer from "./structure/Footer"
import Loading from "./structure/Loading"
import MainPage from "./main/MainPage"
import getWeb3 from './getWeb3'
import "./App.css"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      account: '',
      teams: [],
      loading: true
    }
  }

  componentDidMount = async () => {
    this.setState({ loading: true })
    await this.loadBlockchainData()
    await this.loadTeamsData()
    this.setState({ loading: false })
  }

  /**
   * Connect with Web3 and get account hash
   * @returns void
   */
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
  }

  /**
   * Reload teams dictionary with current datas
   * @returns void
   */
  async loadTeamsData() {
    this.setState({ teams: [] })
    const teamsCount = await this.state.brasileirao.methods.teamsCount().call()

    for (let i = 1; i <= teamsCount; i++) {
      const team = await this.state.brasileirao.methods.teams(i).call()
      this.setState({
        teams: [...this.state.teams, team]
      })
    }
  }

  bet = (teamId) => {
    this.setState({ loading: true })
    this.state.brasileirao.methods.bet(teamId).send({ from: this.state.account })
      .then(async () => {
        alert("Ok")
        await this.loadTeamsData()
      })
      .catch((err) => {
        alert("Something is wrong!")
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid" style={{ height: this.state.height - 80 }}>
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center">Top candidatos - Vencedor do brasileirão 2022</h1>
              <hr /><br />
              {
                this.state.loading
                  ? <Loading />
                  : <MainPage bet={this.bet} teams={this.state.teams} account={this.state.account} />
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
