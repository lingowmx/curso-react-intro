import PropTypes from 'prop-types'
import { Counter } from '../components/Counter'
import { Search } from '../components/Search'
import { List } from '../components/List'
import { TodoItem } from '../components/TodoItem'
import { ButtonAddTodo } from '../components/ButtonAddTodo'
import { TodosLoading } from '../components/TodosLoading'
import { TodosError } from '../components/TodosError'
import { EmptyTodos } from '../components/EmptyTodos'
import { TodoContext } from '../Context'
import { useContext } from 'react'

export const AppUI = () => {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext)
  return (
    <div className='p-8 w-full h-screen flex flex-col text-center bg-yellow-50'>
      <Counter />
      <Search />
      <List>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
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
  )
}

AppUI.propTypes = {
  completedTodos: PropTypes.number.isRequired,
  totalTodos: PropTypes.number.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.string.isRequired,
  searchedTodos: PropTypes.string.isRequired,
  completeTodo: PropTypes.string.isRequired,
  deleteTodo: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
}