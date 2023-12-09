import React, { useState } from 'react';
const Items = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'card-flipped' : ''}`} onMouseEnter={handleCardFlip} onMouseLeave={handleCardFlip}>
      <div className="card-front">
        <img className="Teacher-img" src={props.img} alt="Card Front" />
        <br /><br />
        <h2>{props.heading}</h2>
        <h4>{props.price}</h4>
      </div>
      <div className="card-back">
        <p>Lorem sunt. Laboriosam cupiditate nisi praesentium impedit qui exercitationem rem rerum nesciunt totam fugit iusto molestiae eaque dolorum sunt, a nam libero, amet ipsum tenetur ea dicta cumque optio. Sequi labore illum eaque perspiciatis dignissimos dolore impedit voluptate optio aliquam, omnis repellat beatae quos sit nulla quaerat nobis ipsa! Maxime at temporibus explicabo laudantium soluta, reprehenderit pariatur repellat illum adipisci mollitia atque dicta non reiciendis harum est cum fuga quas porr</p>
        <button className='btn'>View Product</button>
      </div>
    </div>
  );
};
export default Items;
