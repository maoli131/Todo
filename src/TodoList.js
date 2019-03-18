import React, { Component } from 'react'
//import { Button } from 'react-bootstrap';

class TodoList extends Component {
    
    // Set focus in the input area so we can continue typing
    // componentDidUpdate() {
    //     this.props.inputElement.current.focus()
    // }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input 
                            placeholder="Task" 
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit"> Add Task </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default TodoList