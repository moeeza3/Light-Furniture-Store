import React, { useEffect } from 'react'
import styled from 'styled-components'
import ProductCards from './ProductCards'
import { useSelector,useDispatch } from 'react-redux'
import { sortNew } from '../store/slices/apiSlice'
import NewArrProducts from './NewArrProducts'
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
const NewArrival = () => {
  const settings = {
    dots: true,
    arrows:false,
    infinite: false,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 3,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    
  };
  const {apidata,newarr}=useSelector(state=>state.api)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(sortNew(apidata))
  },[apidata])

  return (
    <>
        <ArrivalWrapper>
        <div className="newArrival">
        <div className="container">
        <div className="newArrival-txt">
        <h2 className="display-4">New Arrivals</h2>
        <p className="newArrivaltxt-1">Our traditional dining tables, chairs, case pieces and other traditional dining furniture are geared toward those who appreciate the simplicity and true craftsmanship. </p>
        
        </div>
        <div className="new-arrival-container">
           
           <NewArrProducts newarr={newarr}/>
     
        </div>
        </div>
        </div>     
        </ArrivalWrapper>
    </>
  )
}

const ArrivalWrapper=styled.section`
 
   .newArrival{
      
       margin: -40px 0;
       display: flex !important;
       flex-direction: column !important;
       justify-content: center !important;
       /* align-items: center !important; */
   }
   .newArrival-txt{
     
     text-align: center;
     margin-bottom:1rem !important;
    }
    .newArrival-txt h2{
     color: ${({theme})=>theme.colors.firstcolor};
     margin-bottom: 1rem;
  }
  .newArrival-txt p{
      color: ${({theme})=>theme.colors.secondcolor};
      letter-spacing: 0.5px;
      line-height: 1.6rem;
    
  }
  /* .new-arrival-container{
   display: inline-block !important;
  } */

  @media screen and (max-width: ${({theme})=>theme.media.tab}) {
     .container{
        margin: 3% 3% !important;
        
     }
  }

  @media screen and (max-width: ${({theme})=>theme.media.mobile}) {
     .container{
        margin: 3% 2% !important;
     }
  }
   /* .newArrival{
     
      width: 100% !important;
      height: 100vh !important;
      
   }
  
   
  .newArrival-txt h2{
     color: ${({theme})=>theme.colors.firstcolor};
     margin-bottom: 1rem;
  }
  .newArrival-txt p{
      color: ${({theme})=>theme.colors.secondcolor};
      letter-spacing: 0.5px;
      line-height: 1.6rem;
    
  }
  .slick-dots{
    background: azure;
    margin-bottom: 40px !important;
    
   }
 
  
  @media screen and (max-width: ${({theme})=>theme.media.tab}) {
     .container{
        margin: 3% 3% !important;
        
     }
  }

  @media screen and (max-width: ${({theme})=>theme.media.mobile}) {
     .container{
        margin: 3% 2% !important;
     }
  } */
   
`;

export default NewArrival