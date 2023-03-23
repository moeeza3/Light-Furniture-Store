import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
const Hero = () => { const settings = {
  dots: true,
  arrows:false,
  infinite: false,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  
};
  return (
    <>
         <HeroWrapper> 
         <div className="hero">
         <Slider {...settings} className="slick">
         <div className="slider-item">
           <img src="images/slide1.png" className="img-fluid" alt="Modern & Minimalistic"/>
           <div className="slider-caption">
           <h1 className="display-4">Modern & Minimalistic</h1>
           <p>The luxury of being yourself.</p>
           </div>
          </div>
          <div className="slider-item">
          <img src="images/slide2.png" className="img-fluid" alt="The Marble Concept"/>
          <div className="slider-caption">
           <h1 className="display-4">The Marble Concept</h1>
           <p>c</p>
           </div>
          </div>
          <div className="slider-item">
          <img src="images/slide3.png" className="img-fluid" alt="The Brighten Up Interior Collection"/>
          <div className="slider-caption">
           <h1 className="display-4">The Brighten Up Interior Collection</h1>
           <p> Twice The Comfort, Twice The Value</p>
           </div>
          </div>
         </Slider>
         </div>
         </HeroWrapper>
    </>
  )
}


const HeroWrapper=styled.section`
  /* .hero{
    width: 100%;
    height: 100vh;
    background: red;
  } */
 .hero{
  width: 100% !important;
  /* background: khaki !important; */
  height: 100vh !important;
 }
  
  .slick{
    width: 100% !important;
    position: relative !important;
  }

  .slider-item{
    
    width: 100% !important;
    height: 100vh !important;
    position: relative !important;
    margin-bottom: -5px;
  }

   .slider-item img{
       width: inherit !important;
       height: inherit !important;
       object-fit: cover !important;
    }


    .slider-item .slider-caption{
      position: absolute  !important;
      top: 50%;
      left: 50%;
      text-align: center;

      transform: translate(-50%, -50%);
      z-index:10;
    }
    .slick-dots li button:before {
     
     background-color: ${({theme})=>theme.colors.firstcolor};
     
   }
   .slider-item .slider-caption h1{
      
      color: ${({theme})=>theme.colors.firstcolor};
      
   }
   .slick-dots{
    
    margin-bottom: 40px !important;
    
   }
   .slider-item .slider-caption p{
      
      color: ${({theme})=>theme.colors.secondcolor};
      font-weight: 400;
      margin-top: 1rem;
   }

   /* .slider-item{
   
    position: relative;
    width: inherit !important;
    height: inherit !important;
   }
   
   .slider-item img{
    width: inherit !important;
    height: inherit !important;
    object-fit: cover !important;
   }
  
   .slider-caption{
    position: absolute;
    top: 50% !important;
    left: 50% !important;
    width: 80%;
    text-align: center !important;
    transform: translate(-50%, -50%) !important;
    z-index: 10;

   }
   .slider-item .slider-caption h1{
      
      color: ${({theme})=>theme.colors.firstcolor};
      
   }
   .slider-item .slider-caption p{
      
      color: ${({theme})=>theme.colors.secondcolor};
      font-weight: 400;
      margin-top: 1rem;
   }
   .slick-dots li button:before {
     
     background-color: ${({theme})=>theme.colors.firstcolor};
     
   } */
   
`;


export default Hero