import React, { useState } from "react";
import { InfoCard, InfoText, InfoTitle } from './weddinginfo.style';
import Caret from "../caret/caret";

function ToggleCard(props) {
    const [open, setOpen] = useState(false);

    //Don't need className at all for InfoCard right??
    return(
        <InfoCard onClick={()=>setOpen(!open)} > 
        <Caret open={open} setOpen={setOpen} />
            {
             open? 
                <InfoText>{props.data.text}</InfoText>  
                :
                <InfoTitle>{props.data.title}</InfoTitle> 
            }
        
        </InfoCard>
    )
}

export default ToggleCard;