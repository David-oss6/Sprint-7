import React from 'react'

export default function Modalidioma(props) {
    return (
        <div>
            <div onClick={() => { props.cerrarModal(false) }} className="modalBackground">
                <div className="modalContainer">
                    <div className="modal-main">
                        Info sobre Idiomas: Lorem ipsum dolor sit amet consectetur adipisicing elit numquam! 30€
                    </div>
                </div>
            </div>
        </div>
    )
}
