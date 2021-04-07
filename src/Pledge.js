import React, { useState } from 'react';

const Pledge = (props) => {
  const [quantity, setQuantity] = useState(props.initialQuantity);

  return (
    <div className={'pledge ' + (quantity == 0 ? 'disabled' : '')}>
      {
        props.modal == "true" ? (
          <div className="pledge-header">
            <label class="container">
              <div className="pledge-header-wrapper">
                <h4>{props.heading}</h4>
                <p>Pledge {props.price} or more</p>
              </div>
              <input
                type="radio"
                name="select-pledge"
                value={props.id}
                className="radio-select"
                disabled={quantity == 0}
              />
              <span className="checkmark checkmark-pledge"></span>
            </label>
          </div>
        ) : (
          <div className="pledge-header-wrapper">
            <h4>{props.heading}</h4>
            <p>Pledge {props.price} or more</p>
          </div>
        )
      }
      {
        props.id == "bamboo" ?
          <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
          you’ll be added to a special Backer member list.</p> : null
      }
      {
        props.id == "black" ?
          <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
          member list. Shipping is included.</p> : null
      }
      {
        props.id == "mahogany" ?
          <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
          to our Backer member list. Shipping is included.</p> : null
      }
      {
        props.modal == "true" ?
        <h3 className="pledge-quantity-modal" >{quantity}<span>left</span></h3> : (
          <div>
            <h2>{quantity}<span>left</span></h2>
            <button disabled={quantity == 0}>{quantity == 0 ? 'Out of Stock' : 'Select Reward'}</button>
          </div>
        )
      }

    </div>
  )
}

export default Pledge;
