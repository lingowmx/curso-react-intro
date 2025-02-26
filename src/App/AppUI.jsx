import PropTypes from 'prop-types'
import { Counter } from '../components/Counter'
import { Search } from '../components/Search'
import { List } from '../components/List'
import { TodoItem } from '../components/TodoItem'
import { ButtonAddTodo } from '../components/ButtonAddTodo'

export const AppUI = ({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) => (
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
)

AppUI.propTypes = {
  completedTodos:PropTypes.number.isRequired,
  totalTodos:PropTypes.number.isRequired,
  searchValue:PropTypes.string.isRequired,
  setSearchValue:PropTypes.string.isRequired,
  searchedTodos:PropTypes.string.isRequired,
  completeTodo:PropTypes.string.isRequired,
  deleteTodo:PropTypes.string.isRequired
}