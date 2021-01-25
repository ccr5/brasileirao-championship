import React, { Component } from 'react'

export default class Progress extends Component {

  componentDidMount = () => {
    const bar = document.getElementById("progress")
    bar.style.width = `${this.props.progress}%`
  }

  render() {
    return (
      <div className="progress">
        <div id="progress" className="progress-bar progress-bar-striped active" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    )
  }
}
