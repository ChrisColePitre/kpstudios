export default function Card(props) {
    return(
        <div class="row justify-content-center">
        <div class="col-12 col-md-10">
                 <div class="carousel slide" id="newTargetValue" data-interval="5000" data-bs-interval="5000">
                     
                     <ol class="carousel-indicators">
                         <li data-slide-to="0" data-bs-slide-to="0" class="active" data-target="#newTargetValue" data-bs-target="#newTargetValue"></li>
                         <li data-slide-to="1" data-bs-slide-to="1" data-target="#newTargetValue" data-bs-target="#newTargetValue"></li>
                         {/* <li data-slide-to="2" data-bs-slide-to="2" data-target="#newTargetValue2" data-bs-target="#newTargetValue2"></li>
                         <li data-slide-to="3" data-bs-slide-to="3" data-target="#newTargetValue2" data-bs-target="#newTargetValue2"></li>
                         <li data-slide-to="4" data-bs-slide-to="4" data-target="#newTargetValue2" data-bs-target="#newTargetValue2"></li>
                         <li data-slide-to="5" data-bs-slide-to="5" data-target="#newTargetValue2" data-bs-target="#newTargetValue2"></li>
                         <li data-slide-to="6" data-bs-slide-to="6" data-target="#newTargetValue2" data-bs-target="#newTargetValue2"></li> */}
                     </ol>
                     <div class="carousel-inner">
                         <div class="carousel-item slider-image item active">
                             <div class="item-wrapper">
                                 <img class="d-block w-100" src="assets/images/pot5bRatio2n3.png" alt="OOPS" />
                                 {/* <div class="carousel-caption d-none d-md-block">
                                 </div> */}
                             </div>
                             
                             
                         </div>
                         <div class="carousel-item slider-image item">
                             <div class="item-wrapper">
                                 <img class="d-block w-100" src="assets/images/pot5bRatio2n3.png" alt="OOPS" />
                             </div>
                            
                             
                         </div>
                {/*         <div class="carousel-item slider-image item">
                             <div class="item-wrapper">
                                 <img class="d-block w-100" src="assets/images/pot5bRatio2n3.png" alt="OOPS" />
                                 <div class="carousel-caption d-none d-md-block">
                                     <h5 class="mbr-section-subtitle mbr-fonts-style display-5">
                                     <a href="https://www.icloud.com/sharedalbum/#B0oG4TcsmGKKEJ8"><strong>Click For Whole Album</strong></a>
                                     </h5>
                                     
                                 </div>
                             </div>
                         </div>
                         <div class="carousel-item slider-image item">
                             <div class="item-wrapper">
                                 <img class="d-block w-100" src="assets/images/pot4dRatio1n1.png" alt="OOPS" />
                                 <div class="carousel-caption d-none d-md-block">
                                     <h5 class="mbr-section-subtitle mbr-fonts-style display-5">
                                         <strong>Fixed-Height Slider</strong>
                                     </h5>
                                     <p class="mbr-section-text mbr-fonts-style display-7">
                                         Click on the image to edit slides.</p>
                                 </div>
                             </div>
                         </div>
                         <div class="carousel-item slider-image item">
                             <div class="item-wrapper">
                                 <img class="d-block w-100" src="assets/images/pot4aRatio16n9.png" alt="OOPS" />
                                 <div class="carousel-caption d-none d-md-block">
                                     <h5 class="mbr-section-subtitle mbr-fonts-style display-5">
                                     <a href="https://www.icloud.com/sharedalbum/#B0oG4TcsmGKKEJ8"><strong>Click For Whole Album</strong></a>
                                     </h5>
                                    
                                 </div>
                             </div>
                         </div>
                         <div class="carousel-item slider-image item">
                             <div class="item-wrapper">
                                 <img class="d-block w-100" src="assets/images/pot4bRatio1n1.png" alt="OOPS" />
                                 <div class="carousel-caption d-none d-md-block">
                                     <h5 class="mbr-section-subtitle mbr-fonts-style display-5">
                                     <a href="https://www.icloud.com/sharedalbum/#B0oG4TcsmGKKEJ8"><strong>Click For Whole Album</strong></a>
                                     </h5>
                                     
                                 </div>
                             </div>
                         </div>
                         <div class="carousel-item slider-image item">
                             <div class="item-wrapper">
                                 <img class="d-block w-100" src="assets/images/pot4cRatio16n9.png" alt="OOPS" />
                                 <div class="carousel-caption d-none d-md-block">
                                     <h5 class="mbr-section-subtitle mbr-fonts-style display-5">
                                         <a href="https://www.icloud.com/sharedalbum/#B0oG4TcsmGKKEJ8"><strong>Click For Whole Album</strong></a>
                                     </h5>
                                     
                                 </div>
                             </div>
                         </div> */}
                     </div>
                     <a class="carousel-control carousel-control-prev" role="button" data-slide="prev" data-bs-slide="prev" href="#newTargetValue">
                         <span class="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true"></span>
                         <span class="sr-only visually-hidden">Previous</span>
                     </a>
                     <a class="carousel-control carousel-control-next" role="button" data-slide="next" data-bs-slide="next" href="#newTargetValue">
                         <span class="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true"></span>
                         <span class="sr-only visually-hidden">Next</span>
                     </a>
                   
                 </div>

                 <div class="carousel slide" id="secondScroller" data-interval="5000" data-bs-interval="5000">     
                     <ol class="carousel-indicators">
                         <li data-slide-to="0" data-bs-slide-to="0" class="active" data-target="#secondScroller" data-bs-target="#secondScroller"></li>
                         <li data-slide-to="1" data-bs-slide-to="1" data-target="#secondScroller" data-bs-target="#secondScroller"></li>
                     </ol>
                     <div class="carousel-inner">
                         <div class="carousel-item slider-image item active">
                             <div class="item-wrapper">
                                 <img class="d-block w-100" src="assets/images/pot4bRatio1n1.png" alt="OOPS" />
                             </div>     
                         </div>
                         <div class="carousel-item slider-image item">
                             <div class="item-wrapper">
                                 <img class="d-block w-100" src="assets/images/pot4dRatio1n1.png" alt="OOPS" />
                             </div>   
                         </div>
                     </div>
                     <a class="carousel-control carousel-control-prev" role="button" data-slide="prev" data-bs-slide="prev" href="#secondScroller">
                         <span class="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true"></span>
                         <span class="sr-only visually-hidden">Previous</span>
                     </a>
                     <a class="carousel-control carousel-control-next" role="button" data-slide="next" data-bs-slide="next" href="#secondScroller">
                         <span class="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true"></span>
                         <span class="sr-only visually-hidden">Next</span>
                     </a> 
                </div>
                 <div class="aboutme" >
                        <h5 class = "aboutmelabel">
                            <a href="https://www.icloud.com/sharedalbum/#B0oG4TcsmGKKEJ8"><strong>Click Here To Browser The Whole Album</strong></a>
                            
                        </h5><br />
                        <p class = "aboutmetext">
                            Those options are already baked in with this model shoot me an email clear blue water but we need distributors to evangelize the new line to local markets, but fire up your browser. Strategic high-level 30,000 ft view. Drill down re-inventing the wheel at the end of the day but curate imagineer, or to be inspired is to become creative.
                        </p>
                </div>
             </div>
             </div> 
    )
}