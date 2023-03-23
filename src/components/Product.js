import React from 'react'
import styled from 'styled-components'
import {AiFillDelete,AiOutlineClose  } from "react-icons/ai";
import { useSelector,useDispatch } from 'react-redux';
import { deleteItem } from '../store/slices/cartSlice';
const Product = ({productdetail}) => {
    const dispatch=useDispatch();
  return (
    <>
        <ListWrapper>
        <div className="list">
            <div className="list-img">
                <img src={`/${productdetail.images[0]}`}/>
            </div>
            <div className="list-detail">
                <h4>{productdetail.name}</h4>
                <div className="list-math-container">
                    {/* <p>{productdetail.totalquantity}</p>
                    <p>x</p>
                    <p>{productdetail.price}</p>
                    <p>=</p>
                    <p>{productdetail.totalprice}</p> */}
                    <p>{productdetail.totalquantity} <span>x</span> <span>{productdetail.price}</span> <span>=</span> <span>Rs {productdetail.totalprice}</span></p>
                </div>
            </div>
            <div className="list-delete">
                <h4 onClick={()=>dispatch(deleteItem(productdetail.id))}><AiFillDelete/></h4>
            </div>
        </div>
        </ListWrapper>
    </>
  )
}
const ListWrapper=styled.section`
   .list{
    width: inherit;
    display: flex;
    justify-content: space-between;
    
    box-shadow: 0px 0px 20px #dee2e6;
   }
   .list-img{
      width: 220px;
      height: 100px;
   }
   .list-img img{
    width: 100%;
    height: 100%;
    
    
   }
   .list-detail{
    
    width: 100%;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
   }
   .list-detail h4{
      /* margin: 1rem 0; */
      margin-bottom: 1rem;
      font-weight: 400;
   }
   .list-math-container{
    display:flex;
    color: #4a4e69;
   }
   .list-delete{
   
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 0 0.2rem;
    color: #4a4e69;
   }

   .list-delete h4:hover{
     color: #db3a34;
   }
`;
export default Product