import React, {Component} from "react";
import {connect} from "react-redux";
import {generateStories} from "../actions";

class GenerateStories extends Component {
  constructor(props) {
    super(props);
    this.state = {numberOfStories: 50};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('change ')
    let id = event.target.id;
    let value = event.target.value;
    console.log({event, id, value })
    this.setState({[id]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const {numberOfStories} = this.state;
    console.log({event, state: this.state})
    this.props.add({numberOfStories});
  }

  render() {
    const {numberOfStories} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Number of stories</label>
          <input
            type="number"
            id={'numberOfStories'}
            value={numberOfStories}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Generate</button>
      </form>
    );
  }
}

const dispatchToProps = dispatch => ({
  add: numberOfStories => dispatch(generateStories(numberOfStories))
});

export default connect(null, dispatchToProps)(GenerateStories);

