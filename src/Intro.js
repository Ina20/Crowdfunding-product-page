import React from 'react';
import BookmarkIcon from './images/icon-bookmark.svg'
import Logo from './images/logo-mastercraft';

const Intro = () => {
  return (
    <div class="intro box">
      <Logo class="logo-m"/>
      <h2>Mastercraft Bamboo Monitor Riser</h2>
      <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
      <div class="wrapper">
        <button>Back this project</button>
        <BookmarkIcon />
      </div>
    </div>
  )
}

export default Intro;
