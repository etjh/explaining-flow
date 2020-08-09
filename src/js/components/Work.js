import React, {Component} from "react";
import {connect} from "react-redux";
import {start, stop, tick} from "../actions";

class Work extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.running
      ? this.props.stop()
      : this.props.start()
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">{this.props.running ? 'STOP' : 'START'}</button>
        </form>
      </>
    );
  }
}

const stateToProps = state => ({
  columns: state.columns,
  running: state.timer?.running
});

const dispatchToProps = dispatch => {
  let startPayload = {tick: () => dispatch(tick())};
  return ({
    start: () => dispatch(start(startPayload)),
    stop: () => dispatch(stop())
  });
};

export default connect(stateToProps, dispatchToProps)(Work);

