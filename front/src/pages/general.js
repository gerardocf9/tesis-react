import {React, useState } from 'react'
import ShowMotors from '../componentes/ShowMotors.js'
import SearchBar from '../componentes/SearchBar.js'

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



export default General;
