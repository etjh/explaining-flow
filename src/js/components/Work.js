import React, {Component} from "react";
import {connect} from "react-redux";
import {tick} from "../actions";

class Work extends Component {
  constructor(props) {
    super(props);
    this.atRest = true
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.atRest)
      this.timerHandle = setInterval(this.props.tick, 1000)
    else
      clearInterval(this.timerHandle)

    this.atRest = !this.atRest
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">TOGGLE</button>
        </form>
      </>
    );
  }
}

const dispatchToProps = dispatch => ({
  tick: () => dispatch(tick())
});

export default connect(null, dispatchToProps)(Work);

