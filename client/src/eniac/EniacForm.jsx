import React, { Component } from 'react'

export default class EniacForm extends Component {
  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <div className="input-group">
              <input id="numberOfTokens" className="form-control input-lg" type="number" name="number" value="1" min="1" pattern="[0-9]">
              </input>
              <span className="input-group-btn">
                <button type="submit" className="btn btn-primary btn-lg">Buy Tokens</button>
              </span>
            </div>
          </div>
        </form>
      </>
    )
  }
}
