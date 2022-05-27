import React from 'react'

const Card = ({id,imagen, titulo}) => {
  return (
    <div className="card shadow-sm m-2">
      <img src={imagen} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">{titulo}</p>
          <button className='btn btn-outline-dark m-2' >✒️</button>
          <button className='btn btn-outline-danger' >❌</button>
        </div>
    </div>
  )
}

export default Card