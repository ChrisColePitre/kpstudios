import styled from 'styled-components';
// background: ${({  open }) => open ? black : theme.primaryLight}; took out, could use if I did theme right
export const InfoDiv = styled.div`
    display: grid;
    grid-column-start: auto;
    grid-row-start: auto;
    grid-gap: 10px;
    @media only screen and (min-width: 793px) {
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 792px) {
        grid-template-columns:  1fr;
    }
    
`
export const InfoCard = styled.div`
    margin: 0;
    padding: 0;
    border-radius: 10px;
    box-shadow: 0px 0px 1px 2px rgba(0,0,0,0.05);
`
export const InfoTitle = styled.h2`
    font-family: "MetropolisPersonalUseRegular-nR5LY";
    font-size: 3vh;
    color: black;
`
export const InfoText = styled.h2`
    font-family: "MetropolisPersonalUseRegular-nR5LY";
    font-size: 2vh;
    color: black;
`