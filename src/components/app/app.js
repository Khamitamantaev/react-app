import React, { Component, useState } from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../add-item'


import './app.css';
export default class App extends Component  {

    maxId = 100;

    state = {
        todoData: [
            {
                id: 1,
                label: 'Drink Coffee',
                important: false
            },
            {
                id: 2,
                label: 'Make Awesome App',
                important: true
            },
            {
                id: 3,
                label: 'Deploy to Vercel',
                important: true
            }
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData })=> {
            const w = todoData.findIndex((item) => item.id === id)
            const newArray = [
                ...todoData.slice(0, w), ...todoData.slice(w + 1)
            ]
            return {
                todoData: newArray
            }
        })
    }

    addItem = (text) => { 
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }

        this.setState(({ todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArray
            }
            
        })
        console.log('add', text)
    }

    onToggleImportant = (id) => {
        console.log('toggle im id:', id)
    }

    onToggleDone = (id) => {
        console.log('toggle done id:', id)
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
    
                <TodoList 
                    todos={this.state.todoData} 
                    onDeleted={this.deleteItem} 
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onAdded={this.addItem}/>
            </div>
        )
    }
}