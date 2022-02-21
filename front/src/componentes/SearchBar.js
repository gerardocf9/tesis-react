import React, { useRef,useState } from "react";

const SearchBar = ({ListMotores})=>{
    const nameRef = useRef();
    const [msg,setMsg] = useState("Seleccione un Motor");
    const onSubmit = (e) => {
        e.preventDefault();
        ListMotores.forEach(motor=>{
            if (nameRef.current.value===motor) {
                window.location.href = "especifica?idMotor="+motor;
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
export default SearchBar

