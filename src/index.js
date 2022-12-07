import React from 'react'
import { createRoot } from 'react-dom/client';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
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
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  )
}

root.render(<App />);