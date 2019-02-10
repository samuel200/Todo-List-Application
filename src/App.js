import React, { Component } from 'react';
import TodoList from './TodoList';
import Header from './Header';
import Save from './Save';


class App extends Component {
  
  addTodo = (text)=>{
    let updatedTodo = this.refs.todoList.state.todos;
    updatedTodo.push(text);
    this.refs.todoList.setState({todos: updatedTodo});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TodoList ref="todoList"/>
        <Save ref="save" addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
