import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './menu.style';

const Menu = ({open}) => {
  /**
   * IMPORTANT: CLICKING LINK IS NOT CLOSING MENU, NEED TO SET THAT UP!!!
   * home works if I remove the # from it's address
   */
  return (
    <StyledMenu open={open} >
      {/* <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">&#x1f4b8;</span>
        Pricing
        </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </a> */}
        <a href="/" className="nav-element">
        Home
        </a>
        <a href="/mystudio" className="nav-element">
        My Studio
        </a>
        <a href="/aboutme" className="nav-element">
        About Me
        </a>
        <a href="/portfolio" className="nav-element">
        Portfolio
        </a>
        <a href="/shop" className="nav-element">
        Shop
        </a>
    </StyledMenu>
  )
}
//Why set strict prop type? would it break without this? 
Menu.propTypes = {
    open: bool.isRequired,
  }
export default Menu;