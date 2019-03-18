import React, { Component } from 'react'
import TodoItems from './TodoItems';
//import { Button } from 'react-bootstrap';

class TodoList extends Component {
    
    // Set focus in the input area so we can continue typing
    // componentDidUpdate() {
    //     this.props.inputElement.current.focus()
    // }

    render() {
        return (
            <div className="todoListMain">
                <div className="enterTask">
                    <form onSubmit={this.props.addItem}>
                        <input 
                            placeholder="Enter task here"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter task here'"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit"> Add Task </button>
                    </form>
                </div>
                <TodoItems 
                    entries={this.props.entries} 
                    deleteItem={this.props.deleteItem}
                />
            </div>
        )
    }
}
export default TodoList