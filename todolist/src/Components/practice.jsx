import react,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Styles from "./module.css";
import { useContext } from "react";
import { usercontext  } from "./usecontext.jsx" // importing user components
// import{Component} from"./usecontext.jsx";// importind function from module


export function Carlist() {

    const [cars, setCars] = useState([]);
    const [caryear, setCaryear] = useState(new Date().getFullYear());
    const [carmodel, setCarmodel] = useState("");
    const [carbrand, setCarbrand] = useState("");

    function addCar() {

        const newCar = {
            caryear,
            carbrand,
            carmodel
        };

        setCars(c => [...c, newCar]);

        setCaryear(new Date().getFullYear());
        setCarbrand("");
        setCarmodel("");
    }

    function removeCar(index) {
        setCars(cars.filter((_, i) => i !== index));
    }

    return (
        <div className="carlist">

            <h1>Cars List</h1>

            <ul>
                {cars.map((car, index) => (
                    <li
                        key={index}
                        onClick={() => removeCar(index)}
                    >
                        {car.caryear} {car.carbrand} {car.carmodel}
                    </li>
                ))}
            </ul>

            <input
                type="number"
                value={caryear}
                onChange={(e) => setCaryear(e.target.value)}
                placeholder="Year"
            />

            <input
                type="text"
                value={carbrand}
                onChange={(e) => setCarbrand(e.target.value)}
                placeholder="Brand"
            />

            <input
                type="text"
                value={carmodel}
                onChange={(e) => setCarmodel(e.target.value)}
                placeholder="Model"
            />

            <button onClick={addCar}>
                Add Car
            </button>
<br /><br />
        </div>
    );
}

export function Todolist(){
    let[tasks,setTask]=useState(["go to office","go to gym"]);
    function updatelist(){
          //if ( document.getElementById("newtask").value.trim() === "") return;
        setTask([...tasks,document.getElementById("newtask").value])
        document.getElementById("newtask").value=""
    }
    function removetask(index){
        setTask(tasks.filter((_,i)=> i!==index))
    }
     function uplifttask(index){
        if (index === 0) return;

        const updatedTasks = [...tasks];

        [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];

        setTask(updatedTasks);
    }
     function downlifttask(index){
       if(index===tasks.length-1) return;
       const updatedTasks=[...tasks];
       [updatedTasks[index],updatedTasks[index+1]]=
       [updatedTasks[index+1],updatedTasks[index]];

       setTask(updatedTasks);
    }
    return(
        <>
         <b>useState example</b> 
    <br /><br />
        <div className="todolist">
             <h1>TO-DO-List</h1>
             <input type="text" placeholder='enter task'id='newtask'/>
             <button style={{backgroundColor:"lightGreen",color:"green"}}onClick={updatelist}>Add task</button>
             <div className='taskbar'>
                  <ol>
                    {tasks.map((task,index)=>(
                        <li>
                           <b>~&nbsp;{task}</b>
                           <div className="btns">
                            <button onClick={()=>removetask(index)}>remove</button>
                            <button style={{backgroundColor:"aliceblue",color:"cadetblue"}}onClick={()=>uplifttask(index)}>⬆️</button>
                            <button style={{backgroundColor:"aliceblue",color:"cadetblue"}}onClick={()=>downlifttask(index)}>⬇️</button>
                            </div> 
                        </li>
                    ))}
                  </ol>
             </div>
        </div>
  
   </>
    );
}
// useEffect(function [dependencies])

//1. useEffect(()=>{})     Run after every re-render
//2.useEffect(()=>{},[])    Run on only mount
//3.useEffect(()=>{},[values])  Run on mount +when value changes


// Uses
//  fetch data from API.
//  show real-time updates on UI(subcriptions)
//  DOM manipulation
//  Event LIsteners

export  function Usestate() {
    const[width, setWidth]=useState(window.innerWidth);
    const[height,setHeight]=useState(window.innerHeight);
    useEffect(()=>{
        window.addEventListener("resize",resize);
        return()=>{
            window.removeEventListener("resize",resize);
        }
    },[])
    function resize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    useEffect(()=>{
        document.title = `size: ${width},${height}`;
    },[width,height])

  return (
    <div>
          
         <b>useState+useEffect example</b> 
    <br /><br />
      <p>Width:{width}</p>
      <p>height:{height}</p>
    </div>
  );
}

export  function Digitalclock() {
     const[time,setTime]= useState(new Date());
     useEffect(()=>{
         const validid=setInterval(()=>{
           setTime(new Date())
           console.log("interval");
         },1000)
         
        return () => {
           console.log("removed");
           clearInterval(validid);
       };
     },[])
    function formatTime(){
        let hours=time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const meridian=(hours>12?"PM":"AM")
        hours = hours % 12 || 12;
        return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)}${meridian}`;
    }
    function padzero(number){
        return (number<10 ? "0":"")+number
    }
  return (
    <>
     <b>useEffect example</b> 
    <br /><br />
    <div className='clock-container'>
       
        <div className="clock">
            <b> <h2><span><p>{formatTime()}</p></span></h2> </b>
        </div>
    
    </div>
    </>
  )
}

//// usecontext

export  function Component2() {
    
const value= useContext(usercontext);
  return (
    <div>
      <h1>HELLO!!&nbsp;{value}</h1>
      
    </div>
  )
}
