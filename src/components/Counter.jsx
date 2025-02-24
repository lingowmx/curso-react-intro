import React from 'react'

export const Counter = ({completed, totalTodos}) => {
  return (
    <div>
      <h1>Has completado {completed} de {totalTodos} TODOs</h1>
    </div>
  )
}

