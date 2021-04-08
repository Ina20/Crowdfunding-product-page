import React, { useState } from "react";
import Statistics from "./Statistics.js";
import About from "./About.js";
import Modal from './Modal.js';
import BookmarkIcon from './images/icon-bookmark.svg';
import Logo from './images/logo-mastercraft';


const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [moneyTotal, setMoneyTotal] = useState(89914);

  return (
    <div class="main">
      <div class="intro box">
        <Logo class="logo-m"/>
        <h2>Mastercraft Bamboo Monitor Riser</h2>
        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div class="wrapper">
          <button onClick={() => setShowModal(true) }>Back this project</button>
          <BookmarkIcon />
        </div>
      </div>
      <Statistics moneyTotal={moneyTotal} />
      <About />
      <Modal onClose={() => setShowModal(false)} show={showModal} moneyTotal={moneyTotal} setMoneyTotal={setMoneyTotal}/>
    </div>
  )
}

export default Main;
