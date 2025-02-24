import PropTypes from 'prop-types';
export const Counter = ({completed, totalTodos}) => {
  return (
    <div>
      <h1>Has completado {completed} de {totalTodos} TODOs</h1>
    </div>
  )
}

Counter.propTypes ={
  completed: PropTypes.number.isRequired,
  totalTodos: PropTypes.number.isRequired
}

