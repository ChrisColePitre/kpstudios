import React, { useState } from 'react';
// import '../app.css';
import Burger from '../burger/burger';
import Menu from '../menu-drawer/menu';
import { BurgerContainer, HeaderContainer, NavContainer, NavElement, Title } from './header.style';

function Header() {
  const [open, setOpen] = useState(false);
    return(
    <>
      <HeaderContainer>
          <BurgerContainer>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </BurgerContainer>
          
          <Title >Katie Pitre Studios</Title>  
          <NavContainer>
              <NavElement href="/" >
                Home
              </NavElement>
              <NavElement href="/aboutme" >
                About Me
              </NavElement>
              <NavElement href="/studio" >
                My Studio
              </NavElement>
              <NavElement href="/portfolio" >
                Portfolio
              </NavElement>
              <NavElement href="/shop" >
                Shop
              </NavElement>
            </NavContainer>
            
        </HeaderContainer>
    </>
    )
}

export default Header;