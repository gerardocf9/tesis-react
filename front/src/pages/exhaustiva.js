

import Tabla from '../componentes/TablaEspecifica.js'
import MotorGeneral from '../componentes/motorGeneral.js'

const Especifica= ({data, idmotor,histograma,fourier})=>{

    return(
    <div className="container">
        <div className = "Resumen">
            <h2>Estado del Motor</h2>
            <div className="micro-motor">
            <MotorGeneral   direccion={"/"}  post={data.posts[0]} />
            </div>
            <a className="LinkExhaustiva" href={"/"}> Regresar a vista General</a>
            <p className="caracteristicas"> {data.posts[0].caracteristicas}</p>
        </div>
        <div className="Fourier">
            <h2>Vista en frecuencia:</h2>
            <img src={require(`../images/${fourier}`)} alt={"Histograma del motor "+idmotor} width="500" height="600"/>
        </div>
        <div className="Histograma">
            <h2>Histograma:</h2>
            <img src={require(`../images/${histograma}`)} alt={"Histograma del motor "+idmotor} width="500" height="600"/>
        </div>
        <div className="Tabla-historica">
            <h2>Tabla resumen:</h2>
            <Tabla data = {data} idmotor={idmotor}/>
        </div>
    </div>
    )
}
export default Especifica
