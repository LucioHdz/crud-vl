import React from 'react'
import Swal from 'sweetalert2'

const Card = ({ data, actualizar, eliminar }) => {
  const { id, producto, stock, contexto } = data
  const disminuir = () => {
    const obj = {
      id: id,
      producto: producto,
      stock: stock - 1,
      contexto: contexto
    }
    if (parseInt(obj.stock) <= 0) {
      Swal.fire({
        title: 'Estas seguro?',
        text: "Esto eliminara el producto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText:'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado!',
            '',
            'success'
          )
          eliminar(id)
        }
      })
    } else {
      actualizar(id, obj);
    }
  }

  const aumentar = () => {
    const obj = {
      id: id,
      producto: producto,
      stock: parseInt(stock) + 1
    }
    actualizar(id, obj);
  }
  return (
    <div className="card shadow-sm m-2">
      <h2 className=" m-auto"> {producto} </h2>
      <div className="card-body d-flex flex-column align-center">
        <small>{contexto}</small>
        <p className="card-text">stock: {stock}</p>
        <div className='m-auto'>
          <button className='btn btn-outline-dark m-2' onClick={disminuir}>➖</button>
          <button className='btn btn-outline-danger' onClick={aumentar} >➕</button>
        </div>
      </div>
    </div>
  )
}

export default Card