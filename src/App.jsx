import { useState } from 'react'
import { Counter } from './components/Counter'
import { Search } from './components/Search'
import './App.css'
import { List } from './components/List'
import { TodoItem } from './components/TodoItem'
import { ButtonAddTodo } from './components/ButtonAddTodo'

function App() {

  const defaultTodos = [
    {text:"First activity", isCompleted: false},
    {text:"Second actividy", isCompleted: false},
    {text:"Third activit", isCompleted: false},
    {text:"Fourth activity", isCompleted: true},
  ]
  const [searchValue, setSearchValue] = useState('')
  console.log('Los usuarios buscaron todos de'  + searchValue)

  return (
    <>
    <div className='p-8 w-full h-screen flex flex-col text-center'>
      <Counter completed={8} totalTodos={10}/>
      <Search 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}/>
      <List>
        {defaultTodos.map((todo) => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          isCompleted={todo.isCompleted} />
        ))}
      </List>
     <ButtonAddTodo />
    </div>
    </>
  )
}

export default App
