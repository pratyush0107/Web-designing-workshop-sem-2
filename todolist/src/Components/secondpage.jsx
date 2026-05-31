import React from "react";
import List from "./list.jsx";
import {Userdata,Counter,DynamiChange,Colorpicker,Mycar,Fooditems} from "./learnusestate().jsx";
import {Stopwatch} from "./usecontext.jsx";
export default function SecondPage() {
   const Fruits=[{name:"apple",calories:"100"},
                  {name:"orange",calories:"67"},
                  {name:"banana",calories:"43"},
                  {name:"litchi",calories:"104"},
                  {name:"guava",calories:"89"},
                  {name:"apricot",calories:"106"}]
  const vegetables=[{name:"potatoes",calories:"100"},
                  {name:"cauliflower",calories:"67"},
                  {name:"cabbage",calories:"43"},
                  {name:"carrot",calories:"104"},
                  {name:"brinjal",calories:"89"},
                  {name:"spanich",calories:"106"}]
  return (
    <>
    <div>
      <List item={Fruits} category="Fruits"/>
      <List item={vegetables} category="Vegetables"/>
    </div>
     <Userdata/>
     <Counter/>
     <DynamiChange/>
     <Colorpicker/>
     <Mycar/>
     <br />
     <Fooditems/>
     <br/>
     <Stopwatch/>
    </>
  );
 

}