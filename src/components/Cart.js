import React from "react";
import styled from "styled-components";
import { opencloseCart } from "../store/slices/commonSlice";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import Product from "./Product";
const Cart = () => {
  const dispatch = useDispatch();
  const { activatemenu, cartstatus } = useSelector((state) => state.common);

  const { cart, totalcount, total } = useSelector((state) => state.cart);
  return (
    <>
      <CartWrapper>
        <div className={`cart ${cartstatus}`}>
          <div className="cart-container">
            <div className="close-btn-container">
              <AiOutlineClose
                onClick={() => dispatch(opencloseCart())}
                className="closebtn"
              />
            </div>

            <div className="cart-container">
              <h3>Cart</h3>
              <hr />
              <div className="cart-items">
                {cart.map((curPro) => {
                  return (
                    <div key={curPro.id}>
                      <Product productdetail={curPro} />
                      <hr className="list-hr" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="cart-total">
              <h3>
                Total: $<span>{total}</span>
              </h3>
            </div>
          </div>
        </div>
      </CartWrapper>
    </>
  );
};

const CartWrapper = styled.section`
  .cart {
    padding: 3% 3%;
  }
  .hidecart {
    position: fixed;
    top: 0;
    right: 0;
    width: 0;
    visibility: hidden;
    transition: 0.5s;
  }
  .showcart {
    position: fixed;
    top: 0;
    right: 0;
    background: #fffffc;
    width: 400px;
    height: 100vh;
    z-index: 10;
    transition: 0.5s;

    visibility: visible;
  }
  .hidecart .closebtn {
    visibility: hidden;
    transition: 0.1s;
  }
  .showcart .closebtn {
    visibility: visible;
  }
  .cart-container {
    width: 100%;
    height: 90%;
  }

  .list-hr {
    margin: 1rem 0;
  }
  .close-btn-container {
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .cart .closebtn {
    font-size: 36px;
    margin-left: 50px;
  }
  .cart-items {
    width: inherit;
    padding: 1rem 0;
    height: 60vh;
    overflow-x: hidden;
  }
  .cart-total {
    display: flex;
    justify-content: space-between;

    color: #4a4e69;
  }
  .cart-total h3 {
    font-weight: 400;
  }
`;

export default Cart;
