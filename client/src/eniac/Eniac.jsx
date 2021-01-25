import React, { Component } from 'react'
import EniacContract from "../contracts/Eniac.json";
import EniacWalletContract from "../contracts/EniacWallet.json";
import Header from "../structure/Header"
import Footer from "../structure/Footer"
import Loading from "../structure/Loading"
import Content from './Content';
import getWeb3 from '../getWeb3'
import "./Eniac.css";


class Eniac extends Component {

  constructor(props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      account: '',
      tokenPrice: 0,
      tokenPriceWei: 0,
      tokensSold: 0,
      totalSupply: 0,
      currentBalance: 0,
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
    const eniacNetwork = EniacContract.networks[networkId];
    const walletNetwork = EniacWalletContract.networks[networkId];
    web3.providers.HttpProvider.prototype.sendAsync = web3.providers.HttpProvider.prototype.send

    const eniac = new web3.eth.Contract(
      EniacContract.abi,
      eniacNetwork && eniacNetwork.address,
    );

    const eniacWallet = new web3.eth.Contract(
      EniacWalletContract.abi,
      walletNetwork && walletNetwork.address,
    );

    this.setState({
      web3,
      eniac,
      eniacWallet,
      account: accounts[0],
    })
  }

  async loadTeamsData() {
    const tokenPrice = await this.state.eniacWallet.methods.tokenPrice().call()
    const tokensSold = await this.state.eniacWallet.methods.tokensSold().call()
    const totalSupply = await this.state.eniac.methods.totalSupply().call()
    const currentBalance = await this.state.eniac.methods.balanceOf(this.state.account).call()
    this.setState({
      tokenPrice: tokenPrice,
      tokenPriceWei: this.state.web3.utils.fromWei(tokenPrice, "ether"),
      currentBalance: currentBalance,
      tokensSold: tokensSold,
      totalSupply: totalSupply
    })
  }

  buyTokens = (qt) => {
    this.setState({ loading: true })
    this.state.eniacWallet.methods.buyTokens(qt).send({
      from: this.state.account,
      value: qt * this.state.tokenPrice,
      gas: 500000
    })
      .then(async () => {
        alert("Ok")
        await this.loadTeamsData()
      })
      .catch((err) => {
        console.log(err)
        alert("Something is wrong!")
      })
      .finally(() => {
        this.setState({ loading: false })
      });
  }

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
                  : <Content
                    buyTokens={this.buyTokens}
                    currentBalance={this.state.currentBalance}
                    tokenPrice={this.state.tokenPriceWei}
                    tokensSold={this.state.tokensSold}
                    totalSupply={this.state.totalSupply}
                    account={this.state.account} />
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
