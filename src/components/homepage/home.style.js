import styled from "styled-components";
import Image from "./assets/functional1-1280x853.jpg";
/**
 *   .image-wrap img {
        align-items: center;
        margin: auto;
        width: 100%;
    }
 * USE LINK STYLING https://css-tricks.com/css-basics-styling-links-like-boss/
 */
export const PicFrame = styled.div`
    padding: 20rem;
    margin: 0; 
    max-width: 100%;
    height: 60vh;
    background-image: url(${Image});
    background-position: center center;
    background-repeat: no-repeat;
`
export const AlbumContainer = styled.div`
    width: 100%; 
    display: grid;
    grid-column-start: auto;
    grid-row-start: auto;
    grid-gap: auto;
    align-items: center; 
  	justify-content: center; 
    @media only screen and (min-width: 793px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media only screen and (max-width: 792px) {
        grid-template-columns:  1fr;
    }
`
export const AlbumFrame = styled.div`
    padding: auto; 
    margin: auto;
    align-items: center; 
    justify-content: center; 
    @media only screen and (min-width: 793px) {
        width: 30vw;
    }
    @media only screen and (max-width: 792px) {
        width: 70vw;
    }
`
export const AlbumTitle = styled.h2`
    padding: 0;
    margin: 1em 1.5em;
    font-size: 3vh; 
    text-decoration: underline;
`
export const AlbumCopy = styled.p`
    padding: auto;
    margin: auto;
    font-size: 2vh; 
`
export const AlbumLink = styled.a`
    padding: 1em 1.5em;
    margin: 1em 1.5em;
    font-size: 2vh; 
    text-decoration: none;
    color: black;
    &:hover {
        color: blue;
        text-decoration: underline;
        cursor: pointer;
    }
    &:visited {
       color: grey; 
    }
    &:active {
        color: purple;
        text-decoration: underline;
        cursor: pointer;
    }
    &:focus {
        
    }
`
