import MotorGeneral from './motorGeneral.js'
function ShowMotors({data,count}){

    return(
        <div>
            {data.posts.map((elemento,indice)=>(
                <div key = {elemento.IdMotor}>
                    {(indice>=count*10)&&(indice<10*(count+1))&&
                    <MotorGeneral  direccion={"especifica?idMotor="+elemento.IdMotor}  post={elemento} />
                    }
                </div>
            ))}
        </div>
    )
}



export default ShowMotors;
