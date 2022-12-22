import React, { Component } from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../add-item'


import './app.css';
export default class App extends Component {

    maxId = 0;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Deploy to Vercel'),
        ]
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
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
        const newItem = this.createTodoItem(text)

        this.setState(({ todoData }) => {
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

    toogleProperty(arr, id, propName) {
        const idx = arr.findIndex((element) => element.id === id)
        const oldItem = arr[idx]
        const newItem = { ...oldItem, [propName]: !oldItem[propName] } // изменяем done поле, не касаясь старого состояния напрямую, т.е создаем новый объект        
        return [ // создаем новый массив со всеми элементами сторого массива и измененным newItem
            ...arr.slice(0, idx), // все значения старого состояния до индекса idx в массиве
            newItem, // новые элемент с уже измененным done полем
            ...arr.slice(idx + 1) // все значения старого состояния после индекса idx в массиве
        ]
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toogleProperty(todoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toogleProperty(todoData, id, 'done')
            }
        })
    }

    render() {
        const { todoData } = this.state
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onAdded={this.addItem} />
            </div>
        )
    }
}