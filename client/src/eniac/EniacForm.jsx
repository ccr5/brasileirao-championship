import React, { Component } from 'react'

export default class EniacForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      amoutToBuy: 1
    }
  }

  getValue = (event) => {
    event.preventDefault()
    const val = event.target.value
    this.setState({ amoutToBuy: val })
  }

  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <div className="input-group">
              <input id="numberOfTokens" className="form-control input-lg" type="number" name="number" min="1" pattern="[0-9]" onChange={(e) => this.getValue(e)}>
              </input>
              <span className="input-group-btn">
                <button type="submit" className="btn btn-primary btn-lg" onClick={(e) => this.props.buyTokens(
                  this.state.amoutToBuy
                )}>Buy Tokens</button>
              </span>
            </div>
          </div>
        </form>
      </>
    )
  }
}
