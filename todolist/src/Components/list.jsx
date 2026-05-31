import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import Styles from "./module.css"
const List = props => {
    const Fruits=[{name:"apple",calories:"100"},
                  {name:"orange",calories:"67"},
                  {name:"banana",calories:"43"},
                  {name:"litchi",calories:"104"},
                  {name:"guava",calories:"89"},
                  {name:"apricot",calories:"106"}]
//Fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabateical order
//Fruits.sort((a, b) => b.name.localeCompare(a.name)); //reversealphabatical order
// Fruits.sort((a, b) => a.calories-b.calories);  //numeric
// Fruits.sort((a, b) => b.calories-a.calories); // reverse numeric
const lowcaloriefruit= Fruits.filter(fruit => fruit.calories <70);
const highcaloriefruit= Fruits.filter(fruit => fruit.calories >80);
  const listitems=Fruits.map(fruit=> <>
                                     <li>{fruit.name}&nbsp;<b>{fruit.calories}</b></li>
                                     </>)
 const listitems1=lowcaloriefruit.map(lowcaloriefruit=> 
                                     <>
                                     <li>{lowcaloriefruit.name}&nbsp;<b>{lowcaloriefruit.calories}</b></li>
                                     </>)
  
   const listitems2=highcaloriefruit.map(highcaloriefruit=>
                                     <>
                                     <li>{highcaloriefruit.name}&nbsp;<b>{highcaloriefruit.calories}</b></li>
                                     </>)
   const itemlist=props.item.map(fruit=> <>
                                     <li>{fruit.name}&nbsp;<b>{fruit.calories}</b></li>
                                     </>)
    // const itemlist2=props.item.map(vegetables=> <>
    //                                  <li>{vegetables.name}&nbsp;<b>{vegetables.calories}</b></li>
    //                                  </>)
    const click=(e)=>{
    e.target.textContent="ouch!!";
     console.log(e);
     e.target.style.backgroundColor="red";
     
    }
  
  return (
    <>
    <div className="listmenu">
    {/* <div>
     <li><b>#Fruits</b>{listitems}</li>
     <li><b>#High caloires</b>{listitems1}</li>
     <li><b>#Low calories</b>{listitems2}</li>
    </div> */}
    <div className="individual" >
        <li><b>{props.category}</b>{itemlist}</li>
        {/* <li><b>{props.category}</b>{itemlist}</li>  */}
    </div>
      <div className='button'>
         <button onClick={(e)=>click(e)}>click me!! </button>
     </div>
    </div>
    </>
  )
}

List.propTypes = {

}


export default List
