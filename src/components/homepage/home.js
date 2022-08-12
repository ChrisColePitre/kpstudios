import React, { useState } from 'react';
import "./assets/home.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image1 from './assets/functional1-1280x853.jpg';
import Image2 from './assets/functional2-1280x853.jpg';
import Image3 from './assets/functional3-1280x853.jpg';
import { AlbumContainer, AlbumFrame, AlbumLink, AlbumTitle } from './home.style';
function Home() {
    const [count, setCount] = useState(1);
    
    return(
       <>
            <Carousel infiniteLoop={true} autoPlay={true} interval={30000} showStatus={false} showThumbs={false}>
                    <div>
                        <img src={Image1} alt="" />
                    </div>
                    <div>
                        <img src={Image2} alt="" /> 
                    </div>
                    <div>
                        <img src={Image3} alt="" />
                    </div>
            </Carousel>
            <AlbumContainer>
                <AlbumFrame>
                    <AlbumTitle>Make Collection Title Styled Component</AlbumTitle>
                    <Carousel infiniteLoop={true} showIndicators={false} showThumbs={false} >
                        <div>
                            <img src={Image1} alt="" />
                        </div>
                        <div>
                            <img src={Image2} alt="" /> 
                        </div>
                        <div>
                            <img src={Image3} alt="" />
                        </div>
                    </Carousel>
                    <AlbumLink href='#' >Make Collection Link Styled Component</AlbumLink>
                </AlbumFrame>
                <AlbumFrame>
                    <AlbumTitle>Make Collection Title Styled Component</AlbumTitle>
                    <Carousel infiniteLoop={true} showIndicators={false} showThumbs={false} >
                        <div>
                            <img src={Image1} alt="" />
                        </div>
                        <div>
                            <img src={Image2} alt="" /> 
                        </div>
                        <div>
                            <img src={Image3} alt="" />
                        </div>
                    </Carousel>
                    <AlbumLink href='#' >Make Collection Link Styled Component</AlbumLink>
                </AlbumFrame>
                <AlbumFrame>
                    <AlbumTitle>Make Collection Title Styled Component</AlbumTitle>
                    <Carousel infiniteLoop={true} showIndicators={false} showThumbs={false} >
                        <div>
                            <img src={Image1} alt="" />
                        </div>
                        <div>
                            <img src={Image2} alt="" /> 
                        </div>
                        <div>
                            <img src={Image3} alt="" />
                        </div>
                    </Carousel>
                    <AlbumLink href='#' >Make Collection Link Styled Component</AlbumLink>
                </AlbumFrame>
            </AlbumContainer>
        </>
    )
}

export default Home; 