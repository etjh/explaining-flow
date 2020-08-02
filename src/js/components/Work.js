import React, {Component} from "react";
import {connect} from "react-redux";
import {doWork} from "../actions";

class Work extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.doWork();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">WORK</button>
      </form>
    );
  }
}

const dispatchToProps = dispatch => ({
  doWork: () => dispatch(doWork())
});

export default connect(null, dispatchToProps)(Work);

