import React from 'react'

export default function Modalidioma(props) {
    return (
        <div>
            <div onClick={() => { props.cerrarModal(false) }} className="modalBackground">
                <div className="modalContainer">
                    <div className="modal-main">
                        Su sitio web tiene {props.numIdio} idiomas seleccionados
                    </div>
                </div>
            </div>
        </div>
    )
}
