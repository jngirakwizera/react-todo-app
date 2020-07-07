import React, {Component} from 'react';


class TodoPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      todos: [],
      isClicked: false
    };
}

    onChange = e => {
      this.setState({
        text: e.target.value
      })
    }

    render() {
      return (
        <div>
          {this.props.text}
          <button onClick={() => this.props.deleteItem(this.props.index)}> Delete Todo </button>
        </div>
      )
    }
  }

export default TodoPanel;