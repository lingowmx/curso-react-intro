import PropTypes from 'prop-types';
export const Counter = ({ completed, totalTodos }) => {
  return (
    <div>
      {totalTodos === completed ? "Felicidades en grandote!!" :
      <h1 className='text-2xl'>Has completado 
         <span className='font-semibold'> {completed}</span> de 
         <span className='font-semibold'> {totalTodos}</span>  TODOs
      </h1>
      }
    </div>
  )
}

Counter.propTypes = {
  completed: PropTypes.number.isRequired,
  totalTodos: PropTypes.number.isRequired
}

