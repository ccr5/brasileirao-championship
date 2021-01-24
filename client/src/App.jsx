import React, { Component } from "react";
import BrasileiraoContract from "./contracts/Brasileirao.json";
import Header from "./structure/Header"
import Footer from "./structure/Footer"
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      storageValue: 0, 
      web3: null, 
      accounts: null, 
      contract: null 
    }
  }

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = BrasileiraoContract.networks[networkId];
      const instance = new web3.eth.Contract(
        BrasileiraoContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log(instance)

      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  render() {
    if (!this.state.web3) { return <div>Loading Web3, accounts, and contract...</div> }

    return (
      <div className="App">
        <Header />
        <div className="container-fluid" style={{height: this.state.height - 80}}>
          <div className="row">
            <div className="col-lg-12">
            <h1 className="text-center">Top candidatos - Vencedor do brasileirão 2021</h1>
            <hr/>
            <br/>
            <div id="loader">
              <p className="text-center">Carregando...</p>
            </div>
            <div id="content" style={{display: "none"}}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Total R$</th>
                  </tr>
                </thead>
                <tbody id="teamsResults">
                </tbody>
              </table>
              <hr/>
              <form >
                <div className="form-group">
                  <label htmlFor="teamsSelect">Selecione o time: </label>
                  <select className="form-control" id="teamsSelect">
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Bet</button>
                <hr />
              </form>
              <p id="accountAddress" className="text-center"></p>
            </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
