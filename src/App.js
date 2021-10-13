import './components/style.css'
import { useState, useEffect, useRef } from 'react'
import Cliente from './components/Cliente'
import { MyBtn, MyInput, MyWeb } from './components/styled'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './components/Inicio';
import Modalpaginas from './components/Modalpagina';
import Modalidioma from './components/Modalidioma';
import { Usuario } from './components/Usuario'


function App() {
  const w = localStorage.getItem("web")
  const p = localStorage.getItem("price")
  const s = localStorage.getItem("seo")
  const a = localStorage.getItem("ads")
  const isw = localStorage.getItem("isWeb")
  const iss = localStorage.getItem("isSeo")
  const isa = localStorage.getItem("isAds")
  const iswe = localStorage.getItem("webExtras")
  const vp = localStorage.getItem("valorP")
  const vi = localStorage.getItem("valorI")

  const [price, setPrice] = useState(p ? JSON.parse(p) : 0)
  const [web, setWeb] = useState(w ? JSON.parse(w) : 0)
  const [seo, setSeo] = useState(s ? JSON.parse(s) : 0)
  const [ads, setAds] = useState(a ? JSON.parse(a) : 0)
  const [isWeb, setIsWeb] = useState(isw ? JSON.parse(isw) : false);
  const [isSeo, setIsSeo] = useState(iss ? JSON.parse(iss) : false);
  const [isAds, setIsAds] = useState(isa ? JSON.parse(isa) : false)
  const [webExtras, setWebExtras] = useState(iswe ? JSON.parse(iswe) : 0)
  const [modalP, setModalP] = useState(false)
  const [modalL, setModalL] = useState(false)

  ////////    LISTA CLIENTES ////////////////////////
  const cl = localStorage.getItem("clientes")
  console.log(cl)
  const [clientes, setClientes] = useState([]);
  const [presupuesto, setPresupuesto] = useState("")
  const [persona, setPresona] = useState("")
  ////////    LISTA CLIENTES ////////////////////////


  const seleccion = (num) => {
    if (num === 1) {
      if (web === 0) {
        setWeb(500)
        setIsWeb(true)
        setValorI(1)
        setValorP(1)
      }
      else if (web !== 0) {
        setWeb(0)
        setIsWeb(false)
        setValorI(0)
        setValorP(0)
      }
    }
    if (num === 2) {
      if (seo === 0) {
        setSeo(300)
        setIsSeo(true)
      }
      else if (seo !== 0) {
        setSeo(0)
        setIsSeo(false)
      }
    }
    if (num === 3) {
      if (ads === 0) {
        setAds(200)
        setIsAds(true)
      }
      else if (ads !== 0) {
        setAds(0)
        setIsAds(false)
      }
    }
  }
  useEffect(() => {
    setPrice(web + seo + ads)
  }, [web, seo, ads])

  ///////  PAGINAS E IDIOMAS   ///////////////////////////
  const pagina = useRef(0)
  const idioma = useRef(0)
  const [valorP, setValorP] = useState(vp ? JSON.parse(vp) : 0)
  const [valorI, setValorI] = useState(vi ? JSON.parse(vi) : 0)

  const definirPagina = (event) => {
    setValorP(event)
  }

  const definirIdioma = (event) => {
    setValorI(event)
  }
  //////////////////Local Storage ///////////////////////////
  useEffect(() => {
    setWebExtras(((valorP * valorI) * 30))
    setPrice(web + seo + ads + webExtras)
    ///////////////////Local Storage ///////////////////////////
    JSON.stringify(isWeb)
    localStorage.setItem("isWeb", isWeb)
    JSON.stringify(isSeo)
    localStorage.setItem("isSeo", isSeo)
    JSON.stringify(isAds)
    localStorage.setItem("isAds", isAds)
    JSON.stringify(valorP)
    localStorage.setItem("valorP", valorP)
    JSON.stringify(valorI)
    localStorage.setItem("valorI", valorI)
    JSON.stringify(web)
    localStorage.setItem("web", web)
    JSON.stringify(seo)
    localStorage.setItem("seo", seo)
    JSON.stringify(ads)
    localStorage.setItem("ads", ads)
    JSON.stringify(webExtras)
    localStorage.setItem("webExtras", webExtras)
    JSON.stringify(clientes)
    localStorage.setItem("clientes", clientes)
  }, [valorP, valorI, web, seo, ads, webExtras, isWeb, isAds, isSeo, clientes])
  //////////////////Local Storage ///////////////////////////

  // {*BOTONES INCREMENTAR/RESTAR*}   /////////////////////

  const sumarP = () => {
    setValorP(valorP + 1)
  }
  const restaP = () => {
    valorP > 0 && setValorP(valorP - 1)
  }
  const sumarI = () => {
    setValorI(valorI + 1)
  }
  const restaI = () => {
    valorI > 0 && setValorI(valorI - 1)
  }


  useEffect(() => {
    JSON.stringify(price)
    localStorage.setItem("valor", "price")
  }, [price])


  const generarClientes = () => {
    var day = Math.floor(Math.random() * 31) + 1
    var month = Math.floor(Math.random() * 12) + 1
    var fecha = new Date(2021, day, month)
    fecha = fecha.toISOString()
    const newCliente = {
      nomPresupost: presupuesto,
      nomClient: persona,
      data: fecha,
      preu: price
    }
    setClientes([...clientes, newCliente])
    setPresupuesto("")
    setPresona("")
    setIsAds(false)
    setIsSeo(false)
    setIsWeb(false)
  }


  return (
    <Router >

      <h1>Web Development </h1>
      <div>
        <Link to="/" className="btn">Inicio</Link>
        <Link to="/compra" className="btn">Compra</Link>
        <hr />
      </div>

      {/* ////////////////   USUARIO /////////////////////////// */}

      <Usuario
        isWeb={isWeb}
        isSeo={isSeo}
        isAds={isAds}
        valorP={valorP}
        valorI={valorI}
      />


      <Switch>

        <Route path={`/compra/`} component={Usuario} >

          <div className="d-flex"  >
            <div>
              <div className="div">
                <input className="box" onClick={() => seleccion(1)} type="checkbox"
                  checked={isWeb}
                ></input>
                <p className="box">Pagina Web (500€)</p>
              </div>

              {/* /* /////////-----------WEB-----------////////////*/}
              {isWeb ? <MyWeb >

                {modalP && <Modalpaginas numPag={valorP} cerrarModal={setModalP} />}
                {modalL && <Modalidioma numIdio={valorI} cerrarModal={setModalL} />}
                <p className="box webdiv">Numero de páginas</p>
                <MyBtn onClick={() => restaP()} >-</MyBtn>
                <MyInput className="box webdiv"
                  onChange={(event) => definirPagina(event.target.value)}
                  type="number"
                  value={valorP}
                  href={pagina}
                />
                <MyBtn onClick={() => sumarP()} >+</MyBtn>
                <button onClick={() => { setModalP(true) }} className="btn-ico" >
                  <i title="Info Paginas" class="far fa-question-circle"></i>
                </button>
                <br />
                <p className="box webdiv">Numero de idiomas</p>
                <MyBtn onClick={() => restaI()} >-</MyBtn>
                <MyInput className="box webdiv"
                  onChange={(event) => definirIdioma(event.target.value)}
                  type="number"
                  value={valorI}
                  href={idioma} />
                <MyBtn onClick={() => sumarI()}>+</MyBtn>
                <button onClick={() => { setModalL(true) }} className="btn-ico">
                  <i title="Info Idiomas" class="far fa-question-circle"></i>
                </button>
              </MyWeb> : null}
              {/* /* /////////-----------FIN  WEB-----------////////////*/}
              <br />
              <div className="div">
                <input className="box" onClick={() => seleccion(2)} type="checkbox"
                  checked={isSeo}  ></input>
                <p className="box">Consultoria SEO (300€)</p>
              </div>
              <br />
              <div className="div">
                <input className="box" onClick={() => seleccion(3)} type="checkbox"
                  checked={isAds}  ></input>
                <p className="box">Google Ads (200€)</p>
              </div>
              <br />
              <p>Preu: {price}</p>
              <hr />

              {/* ///////////  INICIO CLIENTEES ///////////////////// */}

              <button class="btn bg-warning" onClick={() => generarClientes()} >Guardar Presupuesto</button>
              <div>
                <input type="text"
                  value={presupuesto}
                  onInput={event => setPresupuesto(event.target.value)}
                  placeholder="Nom de presupost" />
                <input type="text"
                  value={persona}
                  onInput={event => setPresona(event.target.value)}
                  placeholder="Nom del client" />
              </div>
            </div>
            <div  >
              <Cliente listaClientes={clientes} />
            </div>
          </div>
          {/* ///////////  FIN CLIENTEES ///////////////////// */}



        </Route >

        <Route path="/">
          <Inicio />


        </Route>

      </Switch>
    </Router >
  );
}

export default App;
