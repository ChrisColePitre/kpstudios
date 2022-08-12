import styled from 'styled-components';

/**
 * removed 'display: flex; flex-direction: row;' and media query 
 * from HeaderContainer, made nav container work right
*/
export const HeaderContainer = styled.header`
    display: grid;
    grid-column-start: auto;
    grid-row-start: auto;
    background-color: white;
    border-bottom: 1px solid black;
    height: auto;
    width: 100vw;
    margin: 0;
    padding: 0;
    @media only screen and (min-width: 996px) {
        grid-template-columns: 1fr 2fr;
    }
    @media only screen and (max-width: 995px) {
        grid-template-columns:  1fr;
    }

`
export const Title = styled.h1`
    font-family: "times";
    font-size: 4vh;
    text-align: center;
    color: black;
    margin: 0px;
    padding: 15px;
    border-right: 1px solid black;
    @media only screen and (min-width: 996px) { 
        width: 32vw;
    }
    @media only screen and (max-width: 995px) { 
        width: auto;
    }
`

export const BurgerContainer = styled.div`
    @media only screen and (min-width: 996px) { 
        display: none;
}
`
export const NavContainer = styled.nav`
    @media only screen and (min-width: 995px) { 
        text-align: right;
        justify-text: center;
        padding: 20px 0px;
        margin: 0;
    }
    @media only screen and (max-width: 995px) { 
        display: none;
    }
`

export const NavElement = styled.a`
    font-family: "timesnewroman";
    font-size: 3vh;
    color: black;
    margin: 10px;
    padding: 20px 10px;
    text-decoration: none;
`
