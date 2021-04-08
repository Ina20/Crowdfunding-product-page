import React, { useState } from 'react';
import Pledge from './Pledge.js';
import CloseIcon from './images/icon-close-modal.svg';

const Modal = (props) => {
  const [showDetails, setShowDetails] = useState('');
  const [price, setPrice] = useState(0);

  const toggleDetails = (e) => {
    setShowDetails(e.target.value);
  }
  const addMoney = () => {
    //props.setMoneyTotal(props.moneyTotal + parseInt(price));
    props.onClose;
  }

  if (!props.show) {
    return null
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Back this project</h2>
          <CloseIcon onClick={props.onClose} />
        </div>
        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        <div className="pledge">
          <div className="pledge-header">
            <label className="container">
              <h4>Pledge with no reward</h4>
              <input
                type="radio"
                name="select-pledge"
                value="noReward"
                onChange={toggleDetails}
                className="radio-select"
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <p>Choose to support us without a reward if you simply believe in our project. As a backer,
          you will be signed up to receive product updates via email.</p>
          {
            showDetails == "noReward" ? (
              <div className="pledge-details">
                <p>Enter your pledge</p>
                <div className="pledge-input-wrapper">
                  <input
                    type="text"
                    name="pledge-value"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    className="pledge-value-input"
                  />
                  <button onClick={addMoney}>Continue</button>
                </div>
              </div>
            ) : null
          }
        </div>
        <Pledge heading="Bamboo Stand" price="$25" id="bamboo" initialQuantity="101" modal="true" show={setShowDetails} details={showDetails}/>
        <Pledge heading="Black Edition Stand" price="$75" id="black" initialQuantity="64" modal="true" show={setShowDetails} details={showDetails}/>
        <Pledge heading="Mahogany Special Edition" price="$200" id="mahogany" initialQuantity="0" modal="true" show={setShowDetails} details={showDetails}/>
      </div>
    </div>


  )
}

export default Modal;
