import React, { Component } from 'react';

class Search extends Component{
    constructor (){
        super(Component);
        this.input = React.createRef();
    }

    render(){

        return(
            <div id="save-section" onSubmit={this.addTodo}>
                <form>
                    <input type="text" ref={this.input} placeholder="Enter todo..." required />
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }

    addTodo = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.input.current.value);
        this.input.current.value = "";
    }

}

export default Search;