import React, { useRef,useState, useEffect } from "react";
import ReactDOM from "react-dom";

const SearchBar = ({ListMotores})=>{
    const nameRef = useRef();
    const [msg,setMsg] = useState("Seleccione un Motor");
    const onSubmit = (e) => {
        e.preventDefault();
        ListMotores.forEach(motor=>{
            if (nameRef.current.value===motor) {
                window.location.href = "especifica?IdMotor="+motor;
            }
        })
        console.log({
            userName: nameRef.current.value

        });
        // reset the form after using the value - NOT RECOMMENDED
        setMsg( "El motor no existe");
    };

    return (
        <div className="SearchBar">
            <form  onSubmit={onSubmit}>
                <input id="name" ref={nameRef} type="text" />
                <button  type="submit">Buscar</button>
                <p className="comentario">{msg}</p>
            </form>
        </div>
    );
};

const MotorGeneral = ({direccion,post})=>{
    let cn;
    let promx = 0;
    let promy = 0;
    let promz = 0;
    let acel = 0;

    post.Data.forEach(medicion=>{
        promx+=medicion.VelocidadX;
        promy+=medicion.VelocidadY;
        promz+=medicion.VelocidadZ;
        acel += medicion.Aceleracion;
    })

    promx/=post.Data.length;
    promy/=post.Data.length;
    promz/=post.Data.length;


    if((promx>=20)||(promy>=20)||(promz>=20)||(acel>=5)){
        cn = "Danger"
    }else{
        if((promx>=12)||(promy>=12)||(promz>=12)||(acel>=2)){
            cn= "Caution"
        }else{
            cn ="Godd"
        }
    }
    return (
        <a href={direccion}>
            <div className={cn}>
                <svg viewBox="0 0 1060.1 1038.7" > <defs id="defs4" > <pattern id="pattern5755" width="10.15625" patternUnits="userSpaceOnUse" patternTransform="translate(-50.062 -42.346)" height="34.698299" > <path id="circle5747" d="m0.0625 7.816e-14c-0.000068 0.010723 0 0.020511 0 0.03125 0 2.76 2.24 5 5 5s4.9995-2.24 4.9995-5c0-0.010689 0.001-0.020477 0-0.0312l-9.9995 7.816e-14z" fill="#803300" /> <rect id="rect5737" height="27.313" width="10.156" y="3.6897" x="0" fill="none" /> <path id="path5739" d="m10.062 3.69c-2.7595 0-4.9995 2.24-4.9995 5s2.24 5 4.9995 5c0.033 0 0.062 0.001 0.094 0v-10c-0.032-0.0006-0.061 0-0.094 0zm0 17.281c-2.7595 0-4.9995 2.24-4.9995 5s2.24 5 4.9995 5c0.033 0 0.062 0.001 0.094 0v-10h-0.094z" fill="#803300" /> <path id="path5741" d="m0 3.69v10h0.0625c2.76 0 5-2.24 5-5s-2.24-5-5-5c-0.021479 0-0.041085-0.0003-0.0625 0zm0 17.312v10c0.021415 0.001 0.041021 0 0.0625 0 2.76 0 5-2.24 5-5s-2.24-5-5-5h-0.0625z" fill="#803300" /> <circle id="circle5743" cx="1" fill="#803300" transform="matrix(10 0 0 10 -4.9375 12.346)" /> <path id="path5753" d="m10.062 34.698c0.001-0.01 0-0.02 0-0.031 0-2.76-2.2395-5-4.9995-5s-5 2.24-5 5c0 0.011-0.000068 0.021 0 0.031h9.9995z" fill="#803300" /> </pattern > </defs > <g id="layer1" transform="translate(60,38.66)" > <path id="Basamento" stroke="#000" strokeWidth="1.9211" fill="#191919" d="m188.47 890.06-187.88 108.94 476.47-0.25c-108.91-4.93-208.75-44.82-288.59-108.69zm622.28 0.63c-79.58 63.39-178.91 103-287.25 108.03l473.19-0.25-185.94-107.78z" /> <path id="Rotore" d="m549.52 624.02c-1.1824-41.555 37.686-77.86 78.997-74.522 21.432-0.008 42.865-0.0164 64.297-0.0246 8.2908-32.284 8.2908-66.653 0-98.938-27.616-0.82271-55.42 0.95952-82.882-2.0276-36.426-6.4892-63.674-42.524-60.3-79.307-0.054-20.67-0.10803-41.339-0.16205-62.009-32.284-8.2908-66.653-8.2908-98.938 0-0.51887 26.746 0.66301 53.58-1.1446 80.259-4.808 37.98-42.293 66.544-80.084 62.821-20.705 0.0877-41.41 0.17548-62.115 0.26322-8.2908 32.284-8.2908 66.653 0 98.938 26.71 0.42448 53.508-0.90249 80.15 0.8917 38.04 4.9533 66.748 42.511 63.17 80.413 0.008 20.68 0.0158 41.36 0.0237 62.039 32.284 8.2908 66.653 8.2908 98.938 0 0.0166-22.932 0.0332-45.865 0.0497-68.797zm-19.52-124.02c0 16.56-13.44 30-30 30s-30-13.44-30-30 13.44-30 30-30 30 13.44 30 30" fillOpacity=".93182" stroke="#1f1a17" strokeWidth="1.55" fill="#dcdcdc" /> <path id="Statore" d="m500 0.71875c-275.61 0-499.28 223.67-499.28 499.28-0.00125 275.61 223.67 499.28 499.28 499.28s499.28-223.67 499.28-499.28-223.67-499.28-499.28-499.28zm-50 103.06v194.84c16.016-3.9673 32.764-6.0938 50-6.0938s33.984 2.1265 50 6.0938v-194.84c109.7 13.538 205.2 71.082 268.5 154.59l-169.16 97.656c23.172 24.032 40.587 53.634 50.062 86.594l169.04-97.59c19.898 47.582 30.875 99.936 30.875 154.97 0 55.033-10.977 107.39-30.875 154.97l-169.03-97.59c-9.4756 32.96-26.891 62.562-50.062 86.594l169.15 97.65c-63.3 83.52-158.8 141.06-268.5 154.6v-194.84c-16.016 3.9673-32.764 6.0938-50 6.0938s-33.984-2.1265-50-6.0938v194.84c-109.69-13.54-205.2-71.06-268.5-154.56l169.16-97.688c-23.172-24.032-40.587-53.634-50.062-86.594l-169.04 97.59c-19.9-47.58-30.87-99.94-30.87-154.97 0-55.033 10.977-107.39 30.875-154.97l169.03 97.59c9.4756-32.96 26.891-62.562 50.062-86.594l-169.15-97.69c63.3-83.5 158.81-141.02 268.5-154.56z" fillOpacity=".93182" stroke="#000" strokeWidth="1.55" fill="#b4b4b4" /> <path id="Avvolgimenti" stroke="#000" strokeWidth="1.807" fill="url(#pattern5755)" d="m450 103.78c-53.22 6.57-103.11 23.5-147.59 48.72l79.59 137.5h68v-186.22zm100 0v186.22h68l79.594-137.5c-44.48-25.23-94.37-42.15-147.59-48.72zm0 792.44c53.218-6.5676 103.11-23.499 147.59-48.719l-79.59-137.5h-68v186.22zm-100 0v-186.22h-68l-79.594 137.5c44.48 25.23 94.37 42.15 147.59 48.72zm368.14-637.63c-32.3-42.8-71.91-77.55-115.99-103.46l-79.282 137.68 34 58.89 161.27-93.109zm50 86.603-161.27 93.109 34 58.89 158.88 0.18021c-0.4-51.13-10.69-102.8-31.61-152.18zm-686.28 396.22c32.297 42.804 71.906 77.546 115.99 103.46l79.282-137.68-34-58.89-161.27 93.109zm-50-86.603 161.27-93.109-34-58.89-158.88-0.18021c0.39565 51.136 10.682 102.8 31.605 152.18zm736.27 0c20.921-49.372 31.204-101.05 31.605-152.18l-158.88 0.18021-34 58.89 161.27 93.109zm-50 86.603-161.27-93.109-34 58.89 79.282 137.68c44.087-25.911 83.689-60.653 115.99-103.46zm-686.27-396.22c-20.921 49.372-31.204 101.05-31.605 152.18l158.88-0.18021 34-58.89-161.27-93.109zm50-86.603 161.27 93.109 34-58.89-79.282-137.68c-44.087 25.911-83.689 60.653-115.99 103.46z" /> <rect id="rect5640" height="27.321" width="20" y="-8.6603" x="-5" fill="none" /> <rect id="rect5691" height="27.321" width="30" y="-38.66" x="-60" fill="none" /> <rect id="rect5697" height="27.321" width="20" y="-38.66" x="-60" fill="none" /> </g ></svg >
            </div>
            <span className="link-text">
            Motor {post.IdMotor}
            </span>
        </a>
    )
}


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

function General({data,ListMotores}){
    const [counter, setCounter] = useState(0);
    let pages = (data.posts.length/12>>0);
    if((data.posts.length%12)===0 ) pages--;
    //increase counter
    const increase = () => {
        if (counter<pages ) {
        setCounter(count => count + 1);
        }
    };
    //decrease counter
    const decrease = () => {
        if (counter===0)return;
        if (counter<= data.posts.length) {
        setCounter(count => count - 1);
        }
    };
    //reset counter
    const reset = () =>{
        setCounter(0)
    }

    return(
        <div className="container">
            <div className="search">
                <SearchBar ListMotores ={ListMotores} />
            </div>
            <div className="counter">
                    <button className="btn_counter reset" onClick={reset}>Reset</button>
                    <button className="btn_counter control_btn" onClick={decrease}>-</button>
                    <span className="btn_counter counter_output">{counter+1}</span>
                    <button className="btn_counter control_btn" onClick={increase}>+</button>
            </div>
            <ShowMotors data={data}  count={counter} />
        </div>
    )
}

function onEveryTick(fn, tick) {
  // Time to next tick
  let getTick = () => tick - (Date.now() % tick);
  // Currie function to sequentially call itself
  let f = () => {
    fn();
    setTimeout(f, getTick());
  }
  // First call after required lag
  setTimeout(f, getTick());
}

function App() {
// Call on 30 second reload page

const [datos, setDatos] = useState({ posts:[] });
const [lista,setLista] = useState({IdMotor:[]});


   let getMotor = async () => {
        let response = await fetch('http://127.0.0.1:8000/get_data_motores')
        let dat = await response.json()
        setDatos(dat)
    }

   let getList = async () => {
        let response = await fetch('http://127.0.0.1:8000/get_list_motores')
        let list = await response.json()
        setLista(list)
    }

  useEffect(() => {
    getMotor();
    getList();
    onEveryTick(()=>{getMotor();getList()}, 3e4);
  },[]);

  return (
    <div >
        <General data={datos} ListMotores = {lista.IdMotor} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
