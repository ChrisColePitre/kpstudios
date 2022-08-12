import styled from 'styled-components';

export const StyledCaret = styled.i`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: .8rem;
  height: .8rem;
  background: transparent;
  border: solid black;
  border-width: 0 3px 3px 0;
  cursor: pointer;
  padding: 0;
  margin: 20px 5px auto 10px;
  z-index: 10;
  transform: ${({open})=> open ? 'rotate(-135deg)' : 'rotate(45deg)'};
  &:focus {
    outline: none;
  }
  
    

 
`;
