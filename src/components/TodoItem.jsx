import PropTypes from "prop-types"
import { CheckIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

export const TodoItem = ({ text, isCompleted, onComplete, onDelete }) => {
  return (
    <>
      <li
        className="w-full rounded-lg border border-black h-14 flex justify-between
      items-center pl-1 pr-1 shadow-md shadow-cyan-600 relative">
        <span
          onClick={() => onComplete()}
          className="cursor-pointer">
          <CheckIcon className={`w-9 h-9 ${isCompleted ? "fill-green-600" : "fill-black"} hover:fill-green-600`} />
        </span>
        <p
          className={`w-72 sm:text-lg  ${isCompleted ? "line-through" : ''}`}>{text}</p>
        <span className="w-9 h-9"></span>
        <span
          onClick={() => onDelete()}
          className="cursor-pointer absolute -right-3 -top-4">
          <XMarkIcon className="w-9 h-9  hover:fill-red-500" />
        </span>
      </li>
    </>
  )
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
