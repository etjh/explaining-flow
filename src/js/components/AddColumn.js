import React, {Component} from "react";
import {connect} from "react-redux";
import {addStory} from "../actions";
import {addColumn} from "../actions";

class AddColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "wip"};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const {name} = this.state;
    this.props.add({name});
    this.setState({name: ""});
  }

  render() {
    const {name} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const dispatchToProps = dispatch => ({
  add: name => dispatch(addColumn(name))
});

export default connect(null, dispatchToProps)(AddColumn);

