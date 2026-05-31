import profile from './image.png'

import styles from "./module.css";

function Card(){
    return(
        <div className="card">
            <img src={profile} alt="photo" />
            <h1 >Shinchan</h1>
            <p >I Watch actioncamen .</p>
        </div>
        
    );
}
export default Card;