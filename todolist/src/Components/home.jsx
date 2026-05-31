import College from "./learingcss.jsx";
import React from 'react'
import Card from "./Card.jsx"
import {Carlist,Todolist,Usestate,Digitalclock,} from "./practice.jsx"
import {Component,Learnuseref} from "./usecontext.jsx";
export default function Home() {
  return (
    <div className="homepage">
      <College 
      contact="+91-8749588326"
      address={
      <>
        NH-07, K<sup>th</sup> Milestone, Ghaziabad
      </>
  }
      />
      <Card/>
      <Carlist/>
      <Todolist/>
      <Usestate/>
      <br /><br />
      <Digitalclock/>
      <br /><br />
      <Component/>
      <br />
      <Learnuseref/>
    </div>
  )
}
