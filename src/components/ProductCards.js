import React from 'react'
import { AiOutlineShoppingCart,AiOutlineSearch} from "react-icons/ai";
import { useDispatch, useSelector} from 'react-redux';
import { addtocart } from '../store/slices/cartSlice';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const ProductCards = ({card}) => {
  const dispatch=useDispatch();
  const {show}=useSelector(state=>state.filter);
 
  return (
    <>
   
    <CardWrapper>
  
       
          <div className="card-pro" key={card.id}>
   <div className="card" >
            <div className="card-img-container">
            <img src={card.images[0]}  />
            <div className="card-img-txt">
              <div className="cart-icon icon" onClick={()=>dispatch(addtocart(card))}>
              <AiOutlineShoppingCart/>
              </div>
              <div className="view-icon ">
              <NavLink to={`/shop/${card.id}`} className="icon"  location={card}>
              <AiOutlineSearch/>
              </NavLink>
              
              </div>
            </div>
            </div>
            <div className="card-body">
              <div className="card-title h3">
               {card.name}
              </div>
              <div className="card-price h3">
                $<span>{card.price}</span>
              </div>
              <div className="card-rating">
               Rating: <span>{card.rating}</span>
              </div>
            </div>
           
           </div>
           </div>
    {/* {
      card.slice(0,show).map(card=>{
        return(
          <div className="card-pro" key={card.id}>
   <div className="card" >
            <div className="card-img-container">
            <img src={card.images[0]} className="img-fluid" />
            <div className="card-img-txt">
              <div className="cart-icon icon" onClick={()=>dispatch(addtocart(card))}>
              <AiOutlineShoppingCart/>
              </div>
              <div className="view-icon icon">
              <NavLink to={`/shop/${card.id}`}  location={card}>
              <AiOutlineSearch/>
              </NavLink>
              
              </div>
            </div>
            </div>
            <div className="card-body">
              <div className="card-title">
               {card.name}
              </div>
              <div className="card-text card-price">
               Rs <span>{card.price}</span>
              </div>
              <div className="card-rating">
               Rating: <span>{card.rating}</span>
              </div>
            </div>
           
           </div>
           </div>
        )
      })
   
    } */}
           </CardWrapper>   
       
    </>
  )
}
const CardWrapper=styled.div`
   .card-pro{
    width: inherit;
   }
  .card{
   
    height: 380px;
    display: flex;
    flex-direction: column;
    
    box-shadow: 10px 5px 20px  ${({theme})=>theme.colors.thirdcolor} !important;
   
  }
 
   /* .card .card-body{
    
    padding: 1rem 0;
    background: red;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
   /* } */ 
   .card-img-container{
    transition: 0.7s ease-in-out;
   }
   .card .card-img-container{
    width: 100%;
    height: 250px;
    position: relative;
   }
   .card-img-container img{
    width: inherit !important;
    height: inherit !important;
    object-fit: contain;
   }
   .card-body{
      height: 130px;
      padding: 10px;
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center !important;
  }
   .card-img-txt{
    position: absolute;
    
    bottom:0;
    right:0;
    margin-right:1rem;
    z-index:10;
    transition: 0.5s ease-in-out;
   }
   .card-img-txt .icon{
     font-size:2rem;
     background: ${({theme})=>theme.colors.fourthcolor};
     margin: 5px 0;
     /* padding: 5px; */
     padding: 0 !important;
     width: 60px;
     height: 60px;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     opacity:0;
     transition: 0.5s ease-in-out;
   }
   .card-img-container:hover{
    opacity: 0.8;
   }
   .card-img-container:hover .icon{
     opacity: 1;
     
   }
   .card-img-txt .icon:hover{
    color: ${({theme})=>theme.colors.fourthcolor};
    background: ${({theme})=>theme.colors.firstcolor};
   }
   .card-title,.card-rating{
      
      margin: 0.5rem 0;
     
   }

   .card-title,.card-price{
      color: ${({theme})=>theme.colors.firstcolor};
      
   }
   .card-price{
    font-weight: 700;
   }

   @media screen and (max-width: ${({theme})=>theme.media.desktop}) {
    .card{
      width: 430px;
      height: 380px !important;
    }
    .card-img-container{
      height: 250px !important;
    }
    .card-body{      
        height: 130px !important;
     }
  }

  @media screen and (max-width: ${({theme})=>theme.media.tab}) {
    .card{
      width: 350px;
      height: 400px !important;
    }
    .card-img-container{
      height: 250px !important;
    }
     .card-body{
       
        height: 130px !important;
     }
  }

  @media screen and (max-width: ${({theme})=>theme.media.mobile}) {
    .card-pro{
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    }
    .card{
      width: 400px;
      height: 400px !important;
    }
    .card-img-container{
      height: 250px !important;
    }
     .card-body{
       
        height: 150px !important;
     }
  }
  
   
`;
export default ProductCards