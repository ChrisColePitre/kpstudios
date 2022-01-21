import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Card(props) {
    return(
        <div class="row justify-content-center">
        <div class="col-12 col-md-10">
            {/**LATEST KILN scrollertarget */}
                <Carousel autoPlay showThumbs={false} infiniteLoop={true}interval={7500} transitionTime={900}> 
                                <div >
                                    <img  src="assets/images/kiln1.jpeg" alt="OOPS" />
                                </div>
                                <div >
                                    <img  src="assets/images/kiln2.jpeg" alt="OOPS" />
                                </div>
                </Carousel>
                {/**LATEST KILN BLURB */}
                 <div class="aboutme" >
                        <h5 class = "aboutmelabel">
                            <a href="https://www.icloud.com/sharedalbum/#B0zG6XBubw7l2E" target="_blank" rel="noopener noreferrer"><strong>Click Here To See More From My Latest Kiln Firing</strong></a>
                            
                        </h5><br />
                        <p class = "aboutmetext">
                            Here are some photos from my latest kiln firing. Lorem Ipsum: Those options are already baked in with this model shoot me an email clear blue water but we need distributors to evangelize the new line to local markets, but fire up your browser. Strategic high-level 30,000 ft view. Drill down re-inventing the wheel at the end of the day but curate imagineer, or to be inspired is to become creative.
                        </p>
                </div>
                {/**FUNCTIONAL WORK BLURB */}
                <Carousel autoPlay showThumbs={false} infiniteLoop={true} interval={7500} transitionTime={900}> 
                            <div >
                                 <img  src="assets/images/functional1.jpeg" alt="OOPS" />
                            </div>
                            <div >
                                 <img  src="assets/images/functional2.jpeg" alt="OOPS" />
                             </div>
                             <div >
                                 <img  src="assets/images/functional3.jpeg" alt="OOPS" />
                             </div>
                </Carousel>
                {/**FUNCTIONAL WORK BLURB */}
                 <div class="aboutme" >
                        <h5 class = "aboutmelabel">
                            <a href="https://www.icloud.com/sharedalbum/#B0zGY8gBYGSMRuh" target="_blank" rel="noopener noreferrer"><strong>Click Here To See More From My Functional Collection</strong></a>
                            
                        </h5><br />
                        <p class = "aboutmetext">
                            Here are some photos of some of my Functional Ceramic work. Lorem Ipsum: Those options are already baked in with this model shoot me an email clear blue water but we need distributors to evangelize the new line to local markets, but fire up your browser. Strategic high-level 30,000 ft view. Drill down re-inventing the wheel at the end of the day but curate imagineer, or to be inspired is to become creative.
                        </p>
                </div>


                {/**UNDERGRAD SHOW scrollertarget */}
                <Carousel autoPlay showThumbs={false} infiniteLoop={true} interval={7500} transitionTime={900}> 
                            <div >
                                 <img  src="assets/images/seniorshow1.jpeg" alt="OOPS" />
                            </div>
                            <div >
                                 <img  src="assets/images/seniorshow2.jpeg" alt="OOPS" />
                             </div>
                             <div >
                                 <img  src="assets/images/seniorshow3.jpeg" alt="OOPS" />
                             </div>
                </Carousel>
                {/**UNDERGRAD SHOW BLURB */}
                <div class="aboutme" >
                        <h5 class = "aboutmelabel">
                            <a href="https://www.icloud.com/sharedalbum/#B0z5nhQST7m67m" target="_blank" rel="noopener noreferrer"><strong>Click Here To Browse This Collection</strong></a>
                            
                        </h5><br />
                        <p class = "aboutmetext">
                            Here are some shots of the ceramic pieces in my senior show. Lorem Ipsum: Those options are already baked in with this model shoot me an email clear blue water but we need distributors to evangelize the new line to local markets, but fire up your browser. Strategic high-level 30,000 ft view. Drill down re-inventing the wheel at the end of the day but curate imagineer, or to be inspired is to become creative.
                        </p>
                </div>
             </div>
             </div> 
    )
}