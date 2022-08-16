import styled from "styled-components";
import Image from "./assets/myStudio.jpg";
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