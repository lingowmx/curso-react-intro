import PropTypes from "prop-types"

export const TodoItem = ({ text, isCompleted }) => {
  return (
    <>
      <li className="w-full rounded-lg border border-black h-14 flex justify-between
      items-center pl-2 pr-2">
        <span className={`${isCompleted && "text-green-500"}`}>V{isCompleted}</span>
        <p className={`"w-72 ${isCompleted && "line-through"}`}>{text}</p>
        <span className="">X</span>
      </li>
    </>
  )
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired
}
