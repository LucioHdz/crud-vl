import React from 'react'
import Card from './Card'

const List = ({datos,actualizar,eliminar}) => {
  
  return (
    <div className='d-flex flex-wrap w-100 col-7 lista'>
      {
        datos.map(card => {
          return(
            <Card key={card.id} data={card} eliminar={eliminar} actualizar={actualizar}/>
          )
        })
      }
    </div>
  )
}

export default List