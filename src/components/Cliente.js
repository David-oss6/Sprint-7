import { useState } from 'react';
import { MyClientDiv } from './styled'


export default function Cliente(props) {
    const [isCliente, setIsCliente] = useState(false)
    props.listaClientes.length > 0 && setIsCliente(true);
    return (
        <div>
            {isCliente ? <MyClientDiv >
                {/* {clientes.map(cliente => {
                return (
                    <Fragment>
                        <li >{cliente.nomPresupost}</li>
                        <li >{cliente.nomClient}</li>
                        <li >{cliente.data}}</li>
                        <li >{cliente.preu}</li>
                    </Fragment>
                )
            })} */}
                {console.log(props.listaClientes)}

            </MyClientDiv> : ""}
        </div>
    )
}

