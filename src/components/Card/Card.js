
import React from "react";
import "./Card.css";



const Card = props => (
  <div className="card img-container hover">
    <img alt={props.name} src={`../../images/${props.image}`} id={props.id}
      onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore' />
  </div>
);

export default Card;