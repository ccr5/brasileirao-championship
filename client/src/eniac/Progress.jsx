import React, { Component } from 'react'

export default class Progress extends Component {
  render() {
    return (
      <div className="progress">
        <div id="progress" className="progress-bar progress-bar-striped active" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    )
  }
}
