// useContext()= React hook which allows you to share values between multiple levels of 
//               components without using props at each level;

// PROVIDER COMPONENT
// 1. import { cerateContext } from "react";
// 2. export const Mycontext =createContext();
// 3. <Mycontext.Provider value={value}>
//  <child/>
//  <Mycontex.Provider/>

//  CONSUMER COMPONENT
//  1. import { useContext } from "react";
//    import {Mycontext} from "module";
// 2. const value=useContext(Mycontext);


import React, { useEffect } from 'react'
import { createContext,useState ,useRef} from "react";
import {Component2} from"./practice.jsx";
import styles from "./module.css";
export const usercontext = createContext();
 export function Component() {
    const[user,setUser]=useState("pratyush gurjar");
  return (
     <usercontext.Provider value={user}>
    <div>
        <b>use context example</b>
      <Component2/>
      <br />
      <input type="text" id='input' onChange={(e)=>setUser(e.target.value)} />
    </div>
     </usercontext.Provider>
  )
}

// useState() = re-render the component when te state value changes

// useref()= use reference this doesn't re - render the component when its velue changes
           // when you want a component to remember the information but don't want to re - rende the component
           // 1.acessing and handling DOM events
           // 2. handling focus,animation and transtitions
           // 3. Managing timers and intervals


export function Learnuseref() {
    const divref=useRef();
    const divref2=useRef();
    const divref3=useRef();
    function chngcolor(){
        // divref.current.focus();
        divref.current.style.backgroundColor="green";
        divref2.current.style.backgroundColor="red";
        divref3.current.style.backgroundColor="red";
    }
     function chngcolor2(){
        // divref.current.focus();
        divref.current.style.backgroundColor="red";
        divref2.current.style.backgroundColor="green";
        divref3.current.style.backgroundColor="red";
    }
     function chngcolor3(){
        // divref.current.focus();
        divref.current.style.backgroundColor="red";
        divref2.current.style.backgroundColor="red";
        divref3.current.style.backgroundColor="green";
    }
  return (
    <>
    <b>useRef example</b>
    <div style={{display:"flex",flexDirection:"row"}}>
      <div className="boxes" style={{ height: "100px",
                                      width: "100px", 
                                      border:"2px solid", 
                                      marginLeft: "20px", 
                                      borderRadius: "5px", marginBottom: "5px",boxShadow:"3px 3px 3px grey" }}
                                      onClick={()=>chngcolor()} ref={divref}></div>
      <div className="boxes" style={{ height: "100px", 
                                      width: "100px",
                                      marginLeft: "20px",
                                      border:"2px solid",
                                      borderRadius: "5px", 
                                      marginBottom: "5px",boxShadow:"3px 3px 3px grey"}}
                                        onClick={()=>chngcolor2()} ref={divref2}></div>
      <div className="boxes" style={{  height: "100px", 
                                       width: "100px",
                                        marginLeft: "20px",
                                        border:"2px solid", 
                                        borderRadius: "5px", marginBottom: "5px",boxShadow:"3px 3px 3px grey" }}
                                        onClick={()=>chngcolor3()} ref={divref3}></div>
    </div>
    </>
  )
}


export function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className="stopwatch">
      <div className="displaywatch">
        <h1>{formatTime()}</h1>
      </div>

      <div className="controls">
        <button style={{backgroundColor:"rgba(00,180,00,0.7)"}}onClick={start}>Start</button>
        <button style={{backgroundColor:"rgba(180,00,00,0.7)"}}onClick={stop}>Stop</button>
        <button style={{backgroundColor:"rgba(00,00,180,0.7)"}}onClick={reset}>Reset</button>
      </div>
    </div>
  );
}