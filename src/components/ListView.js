import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../store/slices/cartSlice";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
const ListView = ({ list }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ListWrapper>
        <div className="list">
          <div className="img-container">
            <img
              src={process.env.PUBLIC_URL + `/${list.images[0]}`}
              alt={list.name}
            />
          </div>
          <div className="list-body">
            <div className="list-detail">
              <div className="list-title h3">{list.name}</div>
              <div className="list-price h3">${list.price}</div>
              <div className="list-para">
                {list.description && list.description.length >= 120
                  ? list.description.slice(0, 120).concat("...")
                  : list.description}
              </div>
            </div>
            <div className="list-cart">
              <div className="list-cart-container list-col">
                <button
                  type="button"
                  className="add-to-cart p"
                  onClick={() => dispatch(addtocart(list))}
                >
                  Add to Cart
                </button>
              </div>
              <div className="list-view-container list-col">
                {/* <button type="button" className="view-product p">View Product</button> */}

                <button type="button" className="view-product p">
                  <NavLink
                    to={`/shop/${list.id}`}
                    location={list}
                    className="link"
                  >
                    View Product
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="list">
            <div className="list-container">
               {
                list.map(cur=>{
                  return (
                    <div className="list-pro" key={cur.id}>
                      <div className="list-list">
                         <div className="list-img-container">
                          <img src={cur.images[0]} className="img-fluid"/>
                         </div>

                         <div className="list-body">
                         <div className="list-detail">
                         <div className="list-title">
                         {cur.name}
                       </div>
                       <div className="list-price">
                         Rs {cur.price}
                       </div>
                       <div className="list-para">
                         {cur.description && cur.description.length>=300?cur.description.slice(0,300).concat("..."):cur.description}
                       </div>
                       </div>
                       <div className="list-cart">
                          <div className="list-cart-container list-cart-addtocart">
                            <button type="button" className="card-btn btn" onClick={()=>dispatch(addtocart(cur))}>Add to Cart</button>
                          </div>
                          <div className="list-cart-container list-cart-view">
                            <button type="button" className="card-view btn" >
                            <NavLink to={`/shop/${cur.id}`}  location={cur} className="card-view link-btn" >View Product</NavLink>
                            </button>
                          </div>
                        </div>
                        </div>
                        
                      </div>
                    </div>
                  )
                })
               }
            
            </div>
          </div> */}
      </ListWrapper>
    </>
  );
};
const ListWrapper = styled.div`
  .list {
    width: 100% !important;
    height: inherit !important;
    display: flex;
    box-shadow: 0px 0px 10px #adb5bd;
  }
  .img-container {
    width: 350px;
    height: 300px !important;
    transition: 0.5s ease-in-out;
  }
  .img-container img {
    width: inherit !important;
    height: inherit !important;
  }

  .img-container:hover {
    opacity: 0.8;
  }

  .list-body {
    width: 100% !important;
    height: 100% !important;
    padding: 0 1rem !important;
  }
  .list-price {
    margin-top: 1rem;
  }
  .list-para {
    line-height: 1.5rem !important;
    margin: 1rem 0;
  }

  .list-detail {
    padding: 0.5rem 0;
    display: flex !important;
    flex-direction: column !important;

    height: 200px !important;
  }

  .list-cart {
    width: 100% !important;
    height: 100px !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: flex-end !important;
    padding: 0.5rem 0;
  }
  .list-col {
    width: calc(100% / 2.2) !important;
    height: 50px !important;
  }

  .add-to-cart,
  .view-product {
    width: 100% !important;
    height: 100% !important;

    background: ${({ theme }) => theme.colors.firstcolor};
    color: ${({ theme }) => theme.colors.fourthcolor};
    border: none;
    outline: none;
    transition: ease-in-out 0.3s;
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    height: 100% !important;
    text-decoration: none !important;
    color: ${({ theme }) => theme.colors.fourthcolor};
    cursor: default !important;
  }

  .add-to-cart:hover {
    background: ${({ theme }) => theme.colors.fourthcolor};
    color: ${({ theme }) => theme.colors.firstcolor};
    border: 1px solid ${({ theme }) => theme.colors.secondcolor};
  }

  .view-product:hover {
    background: ${({ theme }) => theme.colors.fourthcolor};
    border: 1px solid ${({ theme }) => theme.colors.secondcolor};
  }
  .view-product:hover .link {
    color: ${({ theme }) => theme.colors.firstcolor};
  }
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    .list {
      display: flex;
      flex-direction: column;
    }

    .img-container {
      width: 100% !important;
      height: 400px !important;
      transition: 0.5s ease-in-out;
    }
    .list-detail {
      text-align: center;
    }
  }
  /* .list{
   width: 1000px;
   padding: 1% 2%;
  }
   .list .list-body{
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   }
   .list-pro{
    width: inherit !important;
    height: 280px;
    margin: 1rem 0;
    box-shadow: 10px 5px 20px  #adb5bd !important;
  }
   .list .list-list{
      display: flex;
      
   }

   .list-list .list-img-container{
    width: 320px;
    height: 280px;
    transition: 0.7s ease-in-out;
   }
   .list-img-container .img-fluid{
      width: inherit;
      height: inherit;
   }
   .list-img-container:hover{
    opacity: 0.8;
   }
   .list-title{
    color: #1A1A1A !important;
    font-weight: 400 !important;
  
    font-size: 22px;
   }
   .list-price{
    font-weight: 600;
    
    font-size: 20px;
    margin: 0.5rem 0;
   }
   .list-para{
     color: #495057;
     font-weight: 200 !important;
     font-size: 15px;
     margin: 0.5rem 0;
     line-height: 1.4rem;
   }
   .list-price span{
    letter-spacing: 1px;
   }
   .list-rating{
    text-align: center;
    font-weight: 700;
    font-size: 18px;
   }
   .list-rating span{
    font-weight: 400;
   
   }
   .list-cart{
    display: flex;
   }
    .list-cart-view{
      margin: 0 1rem;
    }
   .list-cart .btn{
    
      width: 150px;
      height: 50px;
      font-size: 18px;
      font-weight: 400;
      background: #22333b;
      color: white !important;
      border: none;
   }
   .link-btn{
    color: white !important;
     text-decoration: none;
   } */
`;
export default ListView;
