import React, { useState } from "react";
import { InfoDiv, InfoCard } from "./weddinginfo.style";
import ToggleCard from "./infocard";
/**
 * NEED TO MODEL INCOMING STATE; IMPO(in my pro opinon) the most secure way 
 * I can protect the event details will be serving that from the backend
 * Could make this component render based on the event details specific to each person
 * Would need to design data-models for grouping people/info
 * 
 * be ready to swap out injData with props.payload when we integrate context/api calls
 * */
const injData = [
  {
      title: "Wedding Day",
      text: "September 23rd, 2023"
  },
  {
      title: "",
      text: "This is the Second Box's Text"
  },
  {
      title: "Third Box",
      text: "This is the Thirde Box's Text"
  },
  {
      title: "Fourth Box",
      text: "This is the Fourth Box's Text"
  },
  {
      title: "Fourth Box",
      text: "This is the Fourth Box's Text"
  }
 ]
function WeddingInfo() {
    //NEED TO BUILD IN ACTUAL PROFILING AUTHENTICATION CALLS
    const [authFlag, setAuthFlag] = useState(true);
    const [data, setData] = useState(injData)
    //NEED TO WRAP THIS IN A PROFILE FOR "IS GUEST" SO THAT RANDOMS DON'T HAVE THE INFORMATION
    const grid = (<>{data.map(element => {
        console.log(element);
        return(
            <ToggleCard data={element} />
        )
    })}</>)
    return(
        <>
        <h1 className="countdown-title">Wedding Information </h1>
            {
            authFlag? ( 
                <InfoDiv auth={authFlag} id="weddingInfo">
                    {grid}
                </InfoDiv>
            ):null
            }

                <hr  style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .5,
                    borderColor : '#000000'
                }}/>
        </>
    )
}

export default WeddingInfo;