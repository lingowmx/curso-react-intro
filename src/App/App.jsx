import { AppUI } from './AppUI.jsx'
import { TodoProvider } from '../Context/index.jsx'
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

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
