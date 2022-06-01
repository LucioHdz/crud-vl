import React from 'react'

const Formulario = ({ agregar}) => {

    const [stock, setStock] = React.useState()
    const [contexto, setContexto] = React.useState()
    const [producto, setProducto] = React.useState()

    function Agregar(e) {
        e.preventDefault();
        if (stock && producto.trim().length > 0) {
            agregar({ producto: producto, stock: stock,contexto:contexto })
            setStock('')
            setContexto('')
            setProducto('')
        }
    }

    return (
        <>
            <form className='col-12 bg-dark p-4 d-flex flex-wrap' onSubmit={Agregar}>
                <div className='col-12 titulo d-flex justify-content-center' >
                    <h1 className='text-white'>Productos</h1>
                </div>
                <div className="m-2 mt-4 col-2">
                    <input value={producto} className="form-control" type="text" id="formFile" placeholder='Producto' onChange={(e) => setProducto(e.target.value)} />
                </div>
                <div className="m-2 mt-4 col-5">
                    <input value={contexto} className="form-control" type="text" id="formFile" placeholder='Descripcion' onChange={(e) => setContexto(e.target.value)} />
                </div>
                <div className="form-group col-2 m-2 mt-4">
                    <input type="number" className="form-control " value={stock} onChange={(e) => setStock(e.target.value)} placeholder='Titulo de la obra' />
                </div>
                <button type="submit" className="m-5 mt-4 btn btn-outline-success">Agregar</button>
            </form>

        </>
    )
}

export default Formulario