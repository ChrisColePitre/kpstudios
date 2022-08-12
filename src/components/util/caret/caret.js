import React from 'react';
import { StyledCaret } from './caret.style';
import { bool, func } from 'prop-types';

//this and menu built following instructions on https://css-tricks.com/hamCarrot-menu-with-a-side-of-react-hooks-and-styled-components/
const Caret = ({open,setOpen}) => {
  return (
    <StyledCaret open={open} onClick={() => setOpen(!open)}>
    </StyledCaret>
  )
}
//Wat dis? 
Caret.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Caret;