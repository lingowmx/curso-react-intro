import { useContext } from "react"
import { TodoContext } from "../Context"


export const ButtonAddTodo = () => {
  const {
    openModal,
    setOpenModal
  } = useContext(TodoContext)
  return (
    <button
    onClick={() => setOpenModal(!openModal)} 
    className="w-10 h-10 rounded-full bg-green-500 
    flex justify-center items-center fixed bottom-4 right-4 z-50 shadow-lg text-2xl
    hover:cursor-pointer hover:scale-125 
    transition-transform duration-200 ease-in-out">+</button>
  )
}
