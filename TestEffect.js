import { useEffect } from "react";
import { useState } from "react";

//use effect hook in react

function TestEffect(){
   var [timer,setTimer]=useState(0);
   var [counter,setCounter]=useState(0);
    useEffect(()=>{
        console.log("this is useeffect call frominside")
    },[counter])

    // setInterval(() => {
    //     setTimer(timer+1)
    // }, 1000);
    return(
       <>
       
       <h1>this is demo for useeffect  {timer} and {counter}
            {console.log("this is from component")}
        </h1>

        <button onClick={()=>{
            setTimer(timer+1);
        }}>update timer</button>

        <button onClick={()=>{
            setCounter(counter+1);
        }}>increase counter</button>
       </>
        
    )
}
export default TestEffect;