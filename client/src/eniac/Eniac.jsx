import React, { Component } from 'react'
import BrasileiraoContract from "../contracts/Brasileirao.json";
import Header from "../structure/Header"
import Footer from "../structure/Footer"
import Loading from "../structure/Loading"
import Content from './Content';
import "./Eniac.css";


class Eniac extends Component {

  constructor(props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      loading: true
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
        <div className="container-fluid" style={{ height: this.state.height - 80 }}>
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center">ENIAC Token</h1>
              <hr /><br />
              {
                this.state.loading
                  ? <Loading />
                  : <Content />
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Eniac
