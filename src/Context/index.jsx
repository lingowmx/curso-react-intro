import { useState } from 'react'
import { createContext } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const TodoContext = createContext()
export const TodoProvider = ({children}) => {
    const {
      item: todos,
      savedItem: savedTodos,
      loading,
      error,
    } = useLocalStorage('Todos_V1', [])
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
  
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
    <TodoContext.Provider value={{
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      loading,
      error,
      openModal,
      setOpenModal
    }}>
      {children}
    </TodoContext.Provider>
  )
}