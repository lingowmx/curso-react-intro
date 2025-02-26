import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage.jsx'
import { AppUI } from './AppUI.jsx'
// import './App.css'
  // const defaultTodos = [
  //   {text:"cebolla activity", isCompleted: false},
  //   {text:"Second actividy", isCompleted: false},
  //   {text:"Third activit", isCompleted: true},
  //   {text:"Fourth activity", isCompleted: true},
  //   {text:"Fifth activity", isCompleted:true}
  // ]

  // localStorage.setItem('Todos_V1', JSON.stringify(defaultTodos))
  // localStorage.removeItem('Todos_V1')


 //La funcion saved Todos se creo para actualizar el estado de los todos y 
  //el local storage. por eso se usa en completeTodo y deleteTodo, se cambio
  // a savedItem para igual con coomo lo usa local storage

function App() {
  const [todos, savedTodos] = useLocalStorage('Todos_V1', [])
  const [searchValue, setSearchValue] = useState('')

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
    savedTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    savedTodos(newTodos)
  }

  return (
    <AppUI 
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  )
}

export default App
