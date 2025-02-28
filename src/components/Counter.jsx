import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TodoContext } from '../Context';
import Confetti from "react-confetti"

export const Counter = () => {
  const {
    completedTodos,
    totalTodos,
  } = useContext(TodoContext)
  const allCompleted = totalTodos === completedTodos
  return (
    <div>
      {allCompleted && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={300} />}
      {allCompleted
        ? (
          <h1 className='text-2xl shadow-md rounded-3xl shadow-green-500'>
            All Todos Done 👍
          </h1>
        ) :
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

