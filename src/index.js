import React from 'react'
import { createRoot } from 'react-dom/client';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';
import './index.css'
const container = document.getElementById('root');
const root = createRoot(container);


const App = () => {
  const todoData = [
    {
      id: 1,
      label: 'Drink Coffee',
      important: false
    },
    { id: 2,
      label: 'Make Awesome App',
      important: true
    },
    {
      id: 3,
      label: 'Deploy to Vercel',
      important: true
    }
  ]

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  )
}

root.render(<App />);