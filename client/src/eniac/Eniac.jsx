import React, { Component } from 'react'
import BrasileiraoContract from "../contracts/Brasileirao.json";
import Header from "../structure/Header"
import Footer from "../structure/Footer"
import getWeb3 from "../getWeb3";

import "./Eniac.css";

class Eniac extends Component {

	constructor (props) {
    super(props)
    this.state = {
      height: window.innerHeight
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

      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

	render() {
		return (
			<div className="App">
        <Header />
        <div className="container-fluid" style={{height: this.state.height - 80}}>
          Eniac
        </div>
        <Footer />
      </div>
		)
	}
}

export default Eniac
