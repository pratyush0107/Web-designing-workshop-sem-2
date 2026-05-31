import React, { useLayoutEffect, useState,useEffect } from "react";
import Styles from "./module.css";

export const Userdata = () => {
  const [name, setName] = useState("user");

  const showfaculty = () => {
    setName("Pratyush Gurjar");
  };

  return (
    <div>
      <h5>
        Name: {name}
        <br />
        Destination : Software Engineer
      </h5>

      <button onClick={showfaculty}>Show faculty</button>
    </div>
  );
};

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount(l=>l+1); // updater function it updates the value of value and can be be itn the same function afterwards
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>{count}</h1>

      <button onClick={increment}>Increment</button>&nbsp;

      <button onClick={reset}>Reset</button>&nbsp;

      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// onChange event in React

export const DynamiChange = () => {
  const [name, setName] = useState("");
                                                                           
  const change = (event) => {
    setName(event.target.value);
  };
  const [quantity,setQuantity]=useState(1);
  function Quantitychng(e){
    setQuantity(e.target.value)
  }
  const [comment,setComment]=useState("");
  function comment1(event){
 setComment(event.target.value)
  }
    const [payment,setPayment]=useState("");
  function handlepayment(event){
 setPayment(event.target.value)
  }
   const [shipping,setShipping]=useState("select");
  function shippingstatus(event){
 setShipping(event.target.value)
  }



  return (
    <>
    <div className="input-b0x">
      <input onChange={change} />

      <h4>Input will display here:<br/> {name}</h4>
      <input onChange={Quantitychng} type="number"/>
      <h4> Quantity: {quantity}</h4>
     <textarea name="comment"placeholder="please!! give us a feedback" onChange={comment1} id=""></textarea>
     <p><br/>{comment}</p>
      <select name="slect an option" id="" onChange={handlepayment}>select payment module
        <option value="visa"></option>
        <option value="mastercard">Mastercard💳</option>
        <option value="Net banking">Net banking🏦</option>
        <option value="filpkart wallet">Filpkart wallet💼</option>
        <option value="coupon code">Coupon code🎟️</option>
        <option value="cash on delivery"> Cash on delivery💵</option>
      </select>
      <p> <b>Banking Status</b>:<br/> {payment}</p>
       </div>
       <label >
        <input type="radio" value="pickup" id="" checked={shipping==="pickup"}
              onChange={shippingstatus}/>
              Pick-Up
        </label>&nbsp;
        <label >
        <input type="radio" value="delivery" id="" checked={shipping==="delivery"}
              onChange={shippingstatus}/>
              Delivery
        </label>

       <p><b>Shipping Status: {shipping}</b></p>
       
    </>
  );
};

export function Colorpicker(){
  const[color,setColor] = useState("#ffffff");
  function colorchanger(event){
    setColor(event.target.value);
  }
  return(
<div className="color-box">
  <div className="display-color-box" style={{backgroundColor: color}}>
  <h4>Color-Picker</h4>
  <p><b>Selected color: <br />{color}</b></p>
  </div>
  <label className="select">
    <p >Select color
    <input type="color" value={color} onChange={colorchanger} />
    </p>
    
  </label>
 
</div>
  );
}
export function Mycar(){
  const [car,setCar]=useState({year: 2024,brand:"mahindra",model:"scorpio"});

  function chngyear(event){
    setCar(c=>({...car,year:event.target.value}));
  }
  function chngbrand(event){
    setCar(c=>({...car,brand:event.target.value}));
  }
  function chngmodel(event){
    setCar(c=>({...car,model:event.target.value}));
  }
  return(
    <div>
      <p>My favourite car is <b>{car.brand}&nbsp;{car.model}&nbsp;{car.year}</b></p>
      <input type="number" value={car.year} onChange={chngyear} /><br /><br />
      <input type="text" value={car.brand} onChange={chngbrand} /><br /><br />
      <input type="text" value={car.model} onChange={chngmodel} />
    </div>
  );
}
export function Fooditems(){
  const[Foods,setFood]=useState(["soup","Hotdog","salad","burger","sandwich"]);
  function addfood(event){
    const newfood=document.getElementById("inputfood").value;
    document.getElementById("inputfood").value="";
    setFood([...Foods,newfood]);
  }
  function remove(index){
   setFood(Foods.filter((__,i) =>i!==index));
  }
  return(
    <div className="food-stack">
      <h1>Food Items</h1>
      <ul>
      {Foods.map((food,index)=>(
        <li key={index} onClick={() =>remove(index)}>
        {food}
      </li>))}
      </ul>
      <br />
      <input type="text"  id="inputfood"  />
      <button onClick={addfood}>Add-item</button>
    </div>
  );
}