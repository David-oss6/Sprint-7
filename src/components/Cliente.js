import { useState } from 'react'
import { MyBtn, MyClientUl } from './styled'


export default function Cliente(props) {
    const [normal, setNormal] = useState(true)
    const [alfa, setAlfa] = useState(false)
    const [fecha, setFecha] = useState(false)


    function orden(a) {
        console.log(props.listaClientes)
        if (a === 1) {
            setNormal(false)
            setAlfa(true)
            setFecha(false)

        } else if (a === 2) {
            setNormal(false)
            setAlfa(false)
            setFecha(true)
        } else if (a === 3) {
            setNormal(true)
            setAlfa(false)
            setFecha(false)
        }
    }

    return (
        <div>
            <MyBtn onClick={() => orden(1)} >Orden Alfabético</MyBtn>
            <MyBtn onClick={() => orden(2)} >Orden por Fecha</MyBtn>
            <MyBtn onClick={() => orden(3)} >Reiniciar</MyBtn>
            {normal && props.listaClientes.map((cliente, index) =>
                <MyClientUl  >
                    <li className="myPrimerLi" key={index} > {cliente.nomPresupost}</li>
                    <li className="myLi" >Nombre del Cliente: {cliente.nomClient}</li>
                    <li className="myLi" >Fecha: {cliente.data}</li>
                    <li className="myLi" >Presupuesto: {cliente.preu}</li>
                </MyClientUl>
            )}
            {alfa && props.listaClientes.sort(function (a, b) {
                return a.nomPresupost.toLowerCase().localeCompare(b.nomPresupost.toLowerCase());
            }).map(cliente =>
                <MyClientUl >
                    <li className="myPrimerLi" > {cliente.nomPresupost}</li>
                    <li className="myLi" >Nombre del Cliente: {cliente.nomClient}</li>
                    <li className="myLi" >Fecha: {cliente.data}</li>
                    <li className="myLi" >Presupuesto: {cliente.preu}</li>
                </MyClientUl>
            )}
            {fecha && props.listaClientes.sort((a, b) => (a.data - b.data)).map(cliente =>
                <MyClientUl >
                    <li className="myPrimerLi" > {cliente.nomPresupost}</li>
                    <li className="myLi" >Nombre del Cliente: {cliente.nomClient}</li>
                    <li className="myLi" >Fecha: {cliente.data}</li>
                    <li className="myLi" >Presupuesto: {cliente.preu}</li>
                </MyClientUl>
            )}

        </div>

    )
}

