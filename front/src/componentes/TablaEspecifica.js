//import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Sensor = ({data, id})=>{
    let promx = 0;
    let promy = 0;
    let promz = 0;
    let acel = 0;
    let lado;
    //let idSe = BigInt(id);
    console.log(id.toString(16))
    if(id>=0x100000000000000){
        if(id>=0x200000000000000){
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
            <th scope="col">{id}</th>
            <th scope="col">{lado}</th>
            <th scope="col">{promy}</th>
            <th scope="col">{promx}</th>
            <th scope="col">{promz}</th>
            <th scope="col">{acel}</th>
        </tr>
    )

}

/*
        <ReactHTMLTableToExcel
          id="button_table_No_Entregados"
          className="btn_excel"
          table="table_No_Entregados"
          filename="table_No_Entregados"
          sheet="table_No_Entregados"
          buttonText="No entregados como excel"
        />
*/

const Tabla = ({data})=>{
    const rowsF = [];
    data.posts.forEach((elem,indice)=>{
        elem.IdSensor.forEach(sensor=>{
        rowsF.push(<Sensor data={data.posts[indice]} id={sensor} />)
        })
    })
    return(
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
    )

}

export default Tabla
