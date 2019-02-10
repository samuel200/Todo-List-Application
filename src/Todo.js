import React, { Component } from 'react';
import './App.css';

class Todo extends Component{
    render(){
       return (
           <div className="todo">
                <input type="Checkbox" />
                <p>{ this.props.todoText }</p>
                <span onClick={this.removeTodo}>x</span>
           </div>
       ); 
    }

    removeTodo = ()=>{
        this.props.removeTodo(this.props.todoText);
    }
}


export default Todo;