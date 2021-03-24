import React from 'react';

const Pledge = (props) => {
  return (
    <div class="pledge">
      <h4>{props.heading}</h4>
      <p>Pledge {props.price} or more</p>
    </div>
  )
}

export default Pledge;
