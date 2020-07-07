import React, {Component} from 'react';
import TodoPanel from "./TodoPanel";


class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [],
      isClicked: false
    };
}

    onChange = e => {
      this.setState({
        text: e.target.value
      })
    }

    deleteItem = (index) => {
        console.log(`delete item at index ${index}`);
        const newList = [...this.state.todos];
        newList.splice(index, 1);
        this.setState({
            todos:newList,
            text:"",
        });
      
    }

    addTodo = () => {
        const newList = [...this.state.todos];
        newList.push(this.state.text);
        this.setState({
            todos:newList,
            text:"",
        });

    }

    render() {
      return (
        <div>
          <h1>Todo</h1>
          <input value={this.state.text}  onChange={this.onChange}/>
          <button onClick={this.addTodo}> Add Todo </button>
          {this.state.todos.map((text, index) => (
        <TodoPanel key={index} index={index} text={text} deleteItem={this.deleteItem} />
      ))}
        </div>
      )
    }
  }

export default Todo;