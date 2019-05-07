
import React from "react";
import "./Card.css";



const Card = props => (
  <div className="card img-container hover">
<<<<<<< HEAD
    <img alt={props.name} src={`${props.image}`} id={props.id}
=======
    <img alt={props.name} src={`../../images/${props.image}`} id={props.id}
>>>>>>> 637300c987b8572dcf83332172b05e2033899251
      onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore' />
  </div>
);

export default Card;