import React from 'react'
import './style.css'

export default function Modalpaginas(props) {

    return (
        <div onClick={() => { props.cerrarModal(false) }} className="modalBackground">
            <div className="modalContainer">

                <div className="modal-main">
                    Su sitio web tiene {props.numPag} páginas seleccionadas
                </div>

            </div>

        </div>
    )
}
