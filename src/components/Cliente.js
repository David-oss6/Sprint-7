import { useState, useEffect } from 'react'
import { MyBtn, MyClientUl } from './styled'

export default function Cliente({ clientes }) {
    const [normal, setNormal] = useState(true)
    const [alfa, setAlfa] = useState(false)
    const [fecha, setFecha] = useState(false)
    const [buscar, setBuscar] = useState(false)
    const [content, setContent] = useState("")


    function orden(a) {
        if (a === 1) {
            setNormal(false)
            setAlfa(true)
            setFecha(false)
            setBuscar(false)
        } else if (a === 2) {
            setNormal(false)
            setAlfa(false)
            setFecha(true)
            setBuscar(false)
        } else if (a === 3) {
            setNormal(true)
            setAlfa(false)
            setFecha(false)
            setBuscar(false)
        }
    }

    ////   Filtrar    ////////////
    function search() {
        setNormal(false)
        setAlfa(false)
        setFecha(false)
        setBuscar(true)
    }
    function filtrar(cliente) {
        return cliente.nomPresupost === content;
    }
    //// FIN Filtrar ////////
    /// LOCALSTORAGE //////


    return (
        <div>
            {/* /////////// Botones  /////////// */}
            <MyBtn onClick={() => orden(1)} >Orden Alfabético</MyBtn>
            <MyBtn onClick={() => orden(2)} >Orden por Fecha</MyBtn>
            <MyBtn onClick={() => orden(3)} >Reiniciar</MyBtn>
            <input type="text"
                placeholder="Buscar Presupost"
                onInput={event => setContent(event.target.value)}
            />
            <button onClick={() => search()}><i className="fas fa-search"></i></button>
            {/* ///////////// Fin Botones /////////// */}
            {normal && clientes.map((cliente, index) =>
                <MyClientUl  >

                    <li className="myPrimerLi" key={index} > {cliente.nomPresupost}</li>
                    <li className="myLi" >Cliente : {cliente.nomClient}</li>
                    <li className="myLi" >Fecha: {cliente.data}</li>
                    <li className="myLi" >Presupuesto: {cliente.preu}</li>

                </MyClientUl>
            )}
            {alfa && clientes.map(cliente => cliente).sort(function (a, b) {
                return a.nomPresupost.toLowerCase().localeCompare(b.nomPresupost.toLowerCase());
            }).map(cliente =>
                <MyClientUl >
                    <li className="myPrimerLi" > {cliente.nomPresupost}</li>
                    <li className="myLi" > Cliente: {cliente.nomClient}</li>
                    <li className="myLi" >Fecha: {cliente.data}</li>
                    <li className="myLi" >Presupuesto: {cliente.preu}</li>
                </MyClientUl>
            )}
            {fecha && clientes.map(cliente => cliente).sort((a, b) => {
                parseInt(a.data)
                parseInt(b.data)
                return a.data.toLowerCase().localeCompare(b.data.toLowerCase());
            })
                .map(cliente =>
                    <MyClientUl >
                        <li className="myPrimerLi" > {cliente.nomPresupost}</li>
                        <li className="myLi" >Cliente: {cliente.nomClient}</li>
                        <li className="myLi" >Fecha: {cliente.data}</li>
                        <li className="myLi" >Presupuesto: {cliente.preu}</li>
                    </MyClientUl>
                )}
            {buscar && clientes.map(cliente => cliente).filter(filtrar).map(cliente =>
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

