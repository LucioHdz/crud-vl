import React from 'react'
import Card from './Card'

const List = ({datos}) => {
  
  return (
    <div className='d-flex flex-wrap w-100 col-7 lista'>
      {
        datos.map(card => {
          return(
            <Card key={card.id} id={card.id} imagen={card.imagen} titulo={card.titulo}/>
          )
        })
      }
    </div>
  )
}

export default List