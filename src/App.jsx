import { useState } from 'react'
import { Counter } from './components/Counter'
import { Search } from './components/Search'
import './App.css'
import { List } from './components/List'
import { TodoItem } from './components/TodoItem'
import { ButtonAddTodo } from './components/ButtonAddTodo'

function App() {

  const defaultTodos = [
    {text:"cebolla activity", isCompleted: false},
    {text:"Second actividy", isCompleted: false},
    {text:"Third activit", isCompleted: true},
    {text:"Fourth activity", isCompleted: true},
    {text:"Fifth activity", isCompleted:true}
  ]
  const [searchValue, setSearchValue] = useState('')
  console.log('Los usuarios buscaron todos de '  + searchValue)
  const [todos, setTodos] = useState(defaultTodos)
  
  
  const completedTodos = todos.filter(todo => !!todo.isCompleted).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText)
    }
  )

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex,1)
    setTodos(newTodos)
  }

  return (
    <>
    <div className='p-8 w-full h-screen flex flex-col text-center bg-yellow-50'>
      <Counter 
      completed={completedTodos}
      totalTodos={totalTodos}/>
      <Search 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}/>
      <List>
        {searchedTodos.map((todo) => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          isCompleted={todo.isCompleted}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)} />
        ))}
      </List>
     <ButtonAddTodo />
    </div>
    </>
  )
}

export default App
