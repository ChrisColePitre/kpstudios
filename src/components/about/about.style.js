import styled from "styled-components";

export const PlaceHolder = styled.div`
    display: grid;
    grid-column-start: auto;
    grid-row-start: auto;
    grid-gap: auto;
    align-items: center; 
    justify-content: center; 
    @media only screen and (min-width: 793px) {
        grid-template-columns: 1fr 1fr 1fr;
        border: solid 1px red;
    }
    @media only screen and (max-width: 792px) {
        grid-template-columns:  1fr;
        border: solid 1px red;
    }
`
export const AboutContainer = styled.div`
    width: 100%; 
`
export const AboutTitle = styled.h2`
    font-family: timesnewroman;
    font-size: 24px;
`
export const AboutCopy = styled.p`
font-family: timesnewroman;
font-size: 18px;
`