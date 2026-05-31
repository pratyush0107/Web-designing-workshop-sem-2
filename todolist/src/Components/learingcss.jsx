import React from 'react'
import PropTypes from 'prop-types';
import Stlyes from "./module.css"
export default function College(props) {
  return (
    <div>
       <div className='box'>
        <img src="https://image-static.collegedunia.com/public/reviewPhotos/1144603/daa8e3c7-a031-4792-a501-d2018c99a906-1_all_24982.jpg" alt="collegephoto" />
      <h1>ABES ENGINEERING COLLEGE</h1>
      <p>Contact 📞 : {props.contact} <br />Location 📍: {props.address} <br /> For More Info Visit ℹ️ At  : <a href="https://www.abes.ac.in/">LINK</a></p>
      
    </div>
    </div>
  )
}
College.propTypes = {
  contact: PropTypes.string,
  address: PropTypes.string
}
College.defaultProps = {
    contact: "00000",
    address: "ADRESS",
}
