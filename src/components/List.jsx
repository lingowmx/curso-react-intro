import PropTypes from "prop-types"

export const List = ({ children }) => {
  return (
    <ul className="flex flex-col gap-4 mt-8">
      {children}
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.string.isRequired
}