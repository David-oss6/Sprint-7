import React from 'react'
import './style.css'

export default function Modalpaginas(props) {

    return (
        <div onClick={() => { props.cerrarModal(false) }} className="modalBackground">
            <div className="modalContainer">

                <div className="modal-main">
                    Info sobre Paginas: Lorem ipsum dolor sit amet consectetur adipisicing elit numquam! 30€
                </div>

            </div>

        </div>
    )
}
