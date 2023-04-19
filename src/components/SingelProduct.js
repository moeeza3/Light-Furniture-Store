import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { useParams,useLocation} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { setDetails,fetchData,add,minus } from '../store/slices/apiSlice'
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { addtocart } from '../store/slices/cartSlice';
import data from '../api/data'
import Singleimage from './Singleimage';
import { FaFacebookF,FaTwitter,FaPinterestP,FaLinkedinIn,FaGooglePlusG } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import Star from './Star';
// import Singleimage from './Singleimage';

const SingelProduct = () => {
  const dispatch=useDispatch();
  const loc=useLocation();
  //  console.log(loc.pathname);
  // console.log(loc);
  const {singleData}=useSelector(state=>state.api);
    const param=useParams();
    let pageid=Number(Object.values(param));
    useEffect(()=>{
        dispatch(fetchData(data)) 
       
        
      dispatch(setDetails(pageid))
  },[data])
  // console.log(window.location)
  // let url = '';
  //       if (typeof window === 'object') {
  //         url = String(window.location);
  //         console.log(url);
  //       }
  return (
    <>
        <SingleProductWrapper>
        <div className="single-product">
        <div className="breadcrumb-container">
        {/* <h3 className="breadcrumb">{loc.pathname.replaceAll("/","").replace(singleData.id,"")} <span className="slash">/</span> <span className="bread-title">{singleData.category?singleData.category.name:null}</span> <span className="slash">/</span> <span className="bread-title">{singleData.name}</span></h3>
         */}
         <div className="product-name h2">{singleData.name}</div>
         <div className="breadcrumb h3">
         {loc.pathname.replaceAll("/","").replace(singleData.id,"")}<div className="slash ">/</div>
         <div className="bread-title">{singleData.category?singleData.category.name:null}</div> 

         </div>
        </div>
        
                <div className="single-container">
                

                     <Singleimage slideimg={singleData}/>
                    <div className="single-product-detail">
                       <h2 className="single-name single-common">{singleData.name}</h2>
                       <p className="single-rating single-common">Rating: <span><Star/></span></p>
                       <p className="single-status single-common">Status: <span>{singleData.status}</span></p>
                       <p className="single-category single-common">Category: <span>{singleData.category?singleData.category.name:"none"}</span></p>
                      
                       <h2 className="single-price single-common">$<span>{singleData.price}</span></h2>
                       <p className="single-description single-common">
                        {singleData.description}
                       </p>
                       <div className="add-to-cart">
                         <div className="counter">
                          <button className="dec" onClick={()=>dispatch(minus())}>
                            <AiOutlineMinus/>
                          </button>
                          <div className="counter-input">{singleData.totalquantity}</div>
                          <button className="inc" onClick={()=>dispatch(add())}>
                            <AiOutlinePlus/>
                          </button>
                         </div>

                         <div className="add-to-cart-button">
                          <button type="button"  className="p"  onClick={()=>dispatch(addtocart(singleData))}>Add to Cart</button>
                         </div>
                       </div>
                       <div className="social-share">
                       <div className="social-desc">
                        Share this item:
                       </div>
                       <div className="social-container">
                       <div className="social-link">
                        <FaFacebookF/>
                       </div>
                       <div className="social-link">
                        <FaTwitter/>
                       </div>
                       <div className="social-link">
                        <FaPinterestP/>
                       </div>
                       <div className="social-link">
                        <FaLinkedinIn/>
                       </div>
                       <div className="social-link">
                        <FaGooglePlusG/>
                       </div>
                       </div>
                       
                       </div>
                    </div>
                </div>
            </div>
        
           
        </SingleProductWrapper>     
    </>
  )
}
const SingleProductWrapper=styled.section`

  .single-product{
      display: flex;
      flex-direction: column;
      
  }
  .breadcrumb-container{
    padding: 5rem 3rem;
    display: flex;
    justify-content: space-between;
    background: ${({theme})=>theme.colors.thirdcolor};;
  }
  .breadcrumb{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 0;
    text-transform: capitalize !important;
  }
  .slash{
    font-style: italic !important;
    margin: 0 0.6rem;
  }
  .slash,.bread-title{
      color: ${({theme})=>theme.colors.secondcolor};
  }
  .single-container{
    margin: 5rem 3rem;
    display: flex;
  }
  .single-product-detail{
    padding: 0 2rem;
    width: 100% !important;
  }
  .single-rating,.single-status,.single-category{
     margin: 1rem 0;
  }
  .single-rating{
    display: flex !important;
  }
  .single-description{
     margin:1rem 0;
     line-height: 1.5rem;
     font-weight: 200 !important;
     color: ${({theme})=>theme.colors.secondcolor};
  }
  .single-price{
    color: ${({theme})=>theme.colors.secondcolor};
  }
  .add-to-cart{
    display: flex !important;
    align-items: center;
    width: 100%;
    height: 50px;
  }
  .counter{
    display: flex !important;
    border: 1px solid ${({theme})=>theme.colors.thirdcolor} !important;
    height: inherit;
  }
  .dec,.inc,.counter-input{
     padding: 0.7rem 1rem !important;
     height: 100%;
     color: ${({theme})=>theme.colors.firstcolor};
     background: ${({theme})=>theme.colors.fourthcolor};
     border: none;
     display: flex;
     justify-content: center;
     align-items: center;
  }
  .add-to-cart-button{
    margin: 0 1rem;
    height: inherit;
  }
  .add-to-cart-button button{
    padding: 0.7rem 2rem !important;
    height: 100%;
     color: ${({theme})=>theme.colors.fourthcolor};
     background: ${({theme})=>theme.colors.firstcolor};
     border: 1px solid ${({theme})=>theme.colors.firstcolor} !important;
     outline: none !important;
  }
  .social-share{
    display: flex;
    margin-top: 2rem;
  }
  .social-container{
      margin-left: 1rem;
      display: flex;
  }
  .social-link{
      margin: 0 0.5rem;
      color: ${({theme})=>theme.colors.firstcolor};
  }
  .social-link:hover{
    color: ${({theme})=>theme.colors.secondcolor};
  }
  /* @media screen and (max-width: ${({theme})=>theme.media.desktop}) {
    
  } */
  @media screen and (max-width: ${({theme})=>theme.media.tab}) {
   
    .breadcrumb-container{
      padding: 5rem 1rem !important;
    }
    
    .single-container{
      margin: 5rem 1rem !important;
    }
    .img{
      width: 400px;
      height: 400px;
    }
    .img-preview{
      width: 400px;
      height: 400px;
   }
   .single-product-detail{
    padding: 0 1rem;
  }
 
  .add-to-cart-button{
    margin: 0.5rem;
  }
 
 }
 @media screen and (max-width: ${({theme})=>theme.media.mobile}) {

    .single-container{
      display: flex;
      flex-direction: column;
      justify-content: center !important;
      justify-content: center;
    } 
    .single-product-detail{
      width: 100% !important;
      padding: 0 0;
      padding-top: 2rem;
     
     }
    .img{
      width: 100%;
      height: 500px;
    }
    .img-preview{
      width: 100%;
      height: 400px;
   }
   .smallimg{
    display: flex;
    justify-content: center;
   }
    .add-to-cart{
      display: flex;
      flex-wrap: wrap;
    }
 }
 @media screen and (max-width: ${({theme})=>theme.media.small}) {

 .smallimg{
  display: flex;
  justify-content: flex-start;
  }

}
@media screen and (max-width: ${({theme})=>theme.media.vsmall}) {
    
   .breadcrumb-container{
    display: flex;
    flex-direction: column;
   }
   .breadcrumb{
    justify-content: flex-start;
   }

   .img{
      width: 100%;
      height: 400px;
   }
   .img-preview{
      width: 100%;
      height: 300px;
   }
  

}
@media screen and (max-width: 350px) {
     .single-product-detail{
      height: 600px;
     }
    
    .add-to-cart-button{
      width:100%;
      margin-left: 0;
    }
   .social-share{
    margin-top: 5rem;
   }
   .social-container{
     flex-wrap: wrap;
   }
 
 }


`;
export default SingelProduct