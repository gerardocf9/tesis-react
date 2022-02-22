import ReactHTMLTableToExcel from 'react-html-table-to-excel';
//import bigInt from 'big-integer'
//const bigInt = require("big-integer");

const Sensor = ({data, id})=>{
    let promx = 0;
    let promy = 0;
    let promz = 0;
    let acel = 0;
    let lado;
    let idSe = id&0x0000ffffffffffff
    if(id>=0x0001000000000000){
        if(id>=0x0002000000000000){
            lado="Chumacera o acople";
        }else{
            lado="Libre";
        }
    }else{
        lado ="Carga";
    }
    data.Data.forEach(medicion=>{
        if(medicion.IdSensorData===id){
            promx+=medicion.VelocidadX;
            promy+=medicion.VelocidadY;
            promz+=medicion.VelocidadZ;
            acel += medicion.Aceleracion;
        }
    })
     return(
        <tr key={id} >
            <th scope="col">{data.Time}</th>
            <th scope="col">{idSe.toString(16)}</th>
            <th scope="col">{lado}</th>
            <th scope="col">{promy}</th>
            <th scope="col">{promx}</th>
            <th scope="col">{promz}</th>
            <th scope="col">{acel}</th>
        </tr>
    )

}

/*
        */

const Tabla = ({data})=>{
    const rowsF = [];
    data.posts.forEach((elem,indice)=>{
        elem.IdSensor.forEach(sensor=>{
        rowsF.push(<Sensor data={data.posts[indice]} id={sensor} />)
        })
    })
    return(
        <div className="tableContainer">
<ReactHTMLTableToExcel
          id="button_table_No_Entregados"
          className="btn_excel"
          table="Tabla-Histograma"
          filename="Tabla-Histograma"
          sheet="Tabla-Histograma"
          buttonText="Histograma como excel"
        />

            <table id="Tabla-Histograma">
                <thead>
                    <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Id Sensor</th>
                        <th scope="col">Lado</th>
                        <th scope="col">Vel Vertical</th>
                        <th scope="col">Vel Horizontal</th>
                        <th scope="col">Vel Axial</th>
                        <th scope="col">Aceleracion</th>
                    </tr>
                </thead>
                <tbody>{rowsF}</tbody>
            </table>
        </div>
    )

}

export default Tabla
