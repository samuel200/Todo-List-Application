import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component{
    state = {
        todos: ["Go to work.", "New todo."]
    }

    removeTodo = (item)=>{
        let updatedTodo = this.state.todos;
        updatedTodo = updatedTodo.filter(i => i !== item);
        this.setState({todos: updatedTodo});
    }

    render(){
        return(
            <div id="todo-list">
                {this.state.todos.map((item, count) => <Todo todoText={item}
                                                             removeTodo={this.removeTodo}
                                                             key={count}
                                                            />)}
            </div>
        );
    }
}

export default TodoList;