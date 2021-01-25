import React, { Component } from 'react'
import BrasileiraoContract from "../contracts/Brasileirao.json";
import Header from "../structure/Header"
import Footer from "../structure/Footer"

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
      console.log("Ok")
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
