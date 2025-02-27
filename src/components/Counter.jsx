import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TodoContext } from '../Context';

export const Counter = () => {
  const {
      completedTodos,
      totalTodos,
  } = useContext(TodoContext)
  return (
    <div>
      {totalTodos === completedTodos ? "Felicidades en grandote!!" :
      <h1 className='text-2xl'>Has completado 
         <span className='font-semibold'> {completedTodos}</span> de 
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

