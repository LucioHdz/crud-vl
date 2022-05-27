import React from 'react'

const Formulario = () => {
    return (
        <form className='col-12 bg-dark p-4 d-flex flex-wrap'>
            <div className='col-12 titulo d-flex justify-content-center' >
            <h1 className='text-white'>Galeria</h1>
            </div>
            <div class="m-2 mt-4 col-4">
                <input class="form-control" type="file" id="formFile"/>
            </div>
            <div class="form-group col-5 m-2 mt-4">
                <input type="text" class="form-control " id="nombre" placeholder='Titulo de la obra'/>
            </div>
            <button type="button" class="m-5 mt-4 btn btn-outline-success">Agregar</button>
        </form>
    )
}

export default Formulario