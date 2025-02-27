import PropTypes from "prop-types"
import { useContext } from "react"
import { TodoContext } from "../Context"

export const Search = () => {
  const {
      searchValue,
      setSearchValue,
  } = useContext(TodoContext)
  return (
    <div className="border border-gray-400 rounded-lg">
      <input 
      type="text"
      placeholder="Search your todos"
      value={searchValue}
      className="flex pl-4 rounded-lg w-full"
      onChange={(event) => {
        setSearchValue(event.target.value)
      }} />
    </div>
  )
}
Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.string.isRequired
}