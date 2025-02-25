import { useState } from 'react'
import { Counter } from './components/Counter'
import { Search } from './components/Search'
import './App.css'
import { List } from './components/List'
import { TodoItem } from './components/TodoItem'
import { ButtonAddTodo } from './components/ButtonAddTodo'

  // const defaultTodos = [
  //   {text:"cebolla activity", isCompleted: false},
  //   {text:"Second actividy", isCompleted: false},
  //   {text:"Third activit", isCompleted: true},
  //   {text:"Fourth activity", isCompleted: true},
  //   {text:"Fifth activity", isCompleted:true}
  // ]

  // localStorage.setItem('Todos_V1', JSON.stringify(defaultTodos))
  // localStorage.removeItem('Todos_V1')

const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem)

  const savedItem = (newItem) => {
    localStorage.setItem(itemName, JSON.
      stringify(newItem))
    setItem(newItem)
  }
  return[item, savedItem]
}
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
    <>
      <div className='p-8 w-full h-screen flex flex-col text-center bg-yellow-50'>
        <Counter
          completed={completedTodos}
          totalTodos={totalTodos} />
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue} />
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
