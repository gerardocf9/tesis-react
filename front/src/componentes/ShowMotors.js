import MotorGeneral from './motorGeneral.js'
function ShowMotors({data,count}){

    return(
        <div className="container">
            {data.posts.map((elemento,indice)=>(
                <div className="card3" key = {elemento.IdMotor}>
                    {(indice>=count*12)&&(indice<12*(count+1))&&
                    <MotorGeneral  direccion={"especifica?idMotor="+elemento.IdMotor}  post={elemento} />
                    }
                </div>
            ))}
        </div>
    )
}



export default ShowMotors;
