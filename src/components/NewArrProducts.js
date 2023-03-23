import React from 'react'
import styled from 'styled-components'
import ProductCards from './ProductCards'
import { useSelector,useDispatch } from 'react-redux'
import { sortNew } from '../store/slices/apiSlice'
import Slider from 'react-slick'
import GridView from './GridView'
const NewArrProducts = ({newarr}) => {
    const settings = {
        dots: true,
        arrows:false,
        infinite: false,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              dots: true,
              arrows:false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
              arrows:false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
              arrows:false,
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
              arrows:false,
            }
          },
        ]
        
      };
    
  return (
    <>
       <NArrWrapper>
       <div className="slider">
          <Slider {...settings} className="sli" >
             
              {
                newarr.map(cur=>{
                    return (
                        <div className="slide" key={cur.id}>
                             <GridView gridview={cur}/>  
                        </div>
                    )
                })
              }
          </Slider>
          </div>
       </NArrWrapper>
    </>
  )
}
const NArrWrapper =styled.div`
   
   .slider{
       
       /* display: flex;
       flex-direction: column; */
       /* display: flex;
       flex-direction: row;
       justify-content: center; */

     }
    
   .slide{
    /* margin: 1rem 1rem !important; */
    /* padding: 0 1rem; */
    /* margin-left: 1rem !important;
    margin-right: 1rem !important; */
    /* display: flex !important;
    justify-content: space-around !important; */
    width: 96% !important;
    box-shadow: 0px 0px 15px ${({theme})=>theme.colors.thirdcolor};
    height:400px !important;
    margin: 1rem 0.8rem !important; 
   
   }
  

   .slick-dots li button:before {
    
     background-color: ${({theme})=>theme.colors.firstcolor};
     /* margin-top: 10px; */
    
   }




`;
export default NewArrProducts