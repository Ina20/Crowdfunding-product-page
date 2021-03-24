import React from 'react';
import Logo from './images/logo.svg';
import Menu from './images/icon-hamburger.svg';

const Nav = () => {
  return (
    <div class="navbar">
      <div class="nav">
        <Logo class="logo" />
        <Menu class="menu" />
      </div>
    </div>
  )
}

export default Nav;
