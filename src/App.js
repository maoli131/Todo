import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
class App extends Component {
    
    constructor() {
        super()
        this.state = {
            items: [],
            currentItem: {text:'', key:''}
        }
    }

    handleInput = e => {
        console.log('Handle input')
        const itemText = e.target.value
        const currentItem = {text: itemText, key: Date.now()}
        this.setState({
            currentItem,
        })
    }

    addItem = e => {
        console.log('Add item')
        e.preventDefault()
        const newItem = this.state.currentItem
        if (newItem.text !== '') {
            console.log(newItem)
            const items = [...this.state.items, newItem]
            this.setState({
                items: items,
                currentItem: {text: '', key: ''},
            })
        }
    }

    deleteItem = key => {
        const filteredItems = this.state.items.filter(item => {
            return item.key !== key
        })
        this.setState({
            items: filteredItems,
        })
    }

    handleClick() {
        console.log('click')
    }

    render() {
        return (
            <div className="App">
                <h1 id="title">To Do List</h1>
                <TodoList 
                    addItem={this.addItem}
                    inputElement={this.inputElement}
                    handleInput={this.handleInput}
                    currentItem={this.state.currentItem}
                    entries={this.state.items}
                    deleteItem={this.deleteItem}
                />
            </div>
        );
    }
}

export default App;
