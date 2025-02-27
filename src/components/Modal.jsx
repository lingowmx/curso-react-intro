import { useContext } from "react"
import ReactDOM from "react-dom"
import { TodoContext } from "../Context"
import { TodoForm } from "./TodoForm"


export const Modal = () => {
  const {
    setOpenModal
  } = useContext(TodoContext)
  return ReactDOM.createPortal(

    <div
      className="flex justify-center items-center bg-black/40 fixed inset-0" 
      onClick={!setOpenModal}>
      <TodoForm />
    </div>,
    document.getElementById('modal')
  )
}
