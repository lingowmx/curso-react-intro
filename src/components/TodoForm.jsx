import { useContext, useState } from "react"
import { TodoContext } from "../Context"

export const TodoForm = () => {
  const {
    addTodo,
    setOpenModal
  } = useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault(),
    addTodo(newTodoValue)
    setOpenModal(false)
  }
  const onCancel = (e) => {
    e.preventDefault()
    setOpenModal(false)
  }
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  return (
    <form 
      onSubmit={onSubmit}
      className="border border-black flex flex-col items-center w-[360px] rounded-lg bg-cyan-200
      md:text-lg">
      <label className="mt-1">Create a TODO</label>
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        className="m-2 rounded-lg resize-none pl-2 w-80 focus:outline-cyan-700"
        placeholder="Run a marathon..."
        required/>
        <div className="flex justify-around  w-full mt-3 mb-3 ">
          <button
            type="button"
            onClick={onCancel}
            className="bg-red-400 text-black rounded-lg p-2 cursor-pointer shadow-lg shadow-black/50">Cancel</button>
          <button 
            type="submit" 
            className="bg-green-500 text-black rounded-lg p-2 cursor-pointer shadow-lg shadow-black/50">Accept</button>
        </div>
    </form>
  )
}
