import React from "react";

import { useSelector, useDispatch } from "react-redux";

import FilterSection from "../components/FilterSection";
import styled from "styled-components";
import SortSection from "../components/SortSection";
import ProductList from "../components/ProductList";
import { openclosefilter } from "../store/slices/commonSlice";
const Shop = () => {
  const dispatch = useDispatch();
  const { apidata } = useSelector((state) => state.api);

  const { showfilter } = useSelector((state) => state.common);

  return (
    <>
      <ShopWrapper>
        <div className="shop">
          <div className="shop-container">
            <div className="tab-option">
              <button
                type="button"
                onClick={() => dispatch(openclosefilter())}
                className="show-menu"
              >
                Show Filter Menu
              </button>
            </div>
            <div className={`filter ${showfilter}`}>
              <div className="close-container">
                <button
                  className="closemenu"
                  onClick={() => dispatch(openclosefilter())}
                >
                  X
                </button>
              </div>

              <FilterSection />
            </div>
            <div className="products-sort">
              <SortSection />

              <div className="products">
                <ProductList apidata={apidata} />
              </div>
            </div>
          </div>
        </div>
      </ShopWrapper>
    </>
  );
};

const ShopWrapper = styled.section`
  .shop {
    display: flex !important;
    flex-direction: column !important;
  }
  .shop-container {
    display: flex;
    width: 100%;
    position: relative;
  }
  .filter {
    width: 20%;
    /* height:100vh; */
    padding: 1% 1%;
    display: flex;
    flex-direction: column;
  }

  .products-sort {
    width: 80%;
    /* display: flex;
      flex-direction: column; */
    /* justify-content: space-around; */
    /* flex-wrap: wrap; */
    /* background: red;  */
    padding: 1% 1% !important;
    /* position: absolute;
      right:0; */
  }
  .closemenu {
    display: none;
  }
  .products {
    /* display: flex;
      flex-wrap:wrap; */
    width: 100% !important;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .card-pro {
    margin: 15px 0;
  }
  .tab-option {
    display: none !important;
  }
  .show-products {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .show-products .show-more {
    padding: 1rem 1.2rem !important;
    background: ${({ theme }) => theme.colors.firstcolor} !important;
    color: ${({ theme }) => theme.colors.fourthcolor} !important;
    border: none;
    outline: none;
  }
  @media screen and (max-width: ${({ theme }) => theme.media.tab}) {
    /* .shop-container{
         
        display: flex !important;
        flex-direction: column !important;

      } */
    /* .shop{
         overflow-y: scroll !important;
      } */
    .shop-container {
      display: flex !important;
      flex-direction: column !important;
    }

    .showfilter {
      width: 300px;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      background: ${({ theme }) => theme.colors.fourthcolor};
      display: flex;
      justify-content: center;
      align-items: center;
      /* padding-top: 5rem;
        padding-bottom: 2rem; */
      overflow-y: scroll;
      transition: width linear 0.7s;
      z-index: 1111;
    }
    /* .showfilter{
        width: 30%;
        visibility: visible;
        transition: width ease-in-out 1s;
     } */
    .hidefilter {
      width: 0% !important;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      opacity: 0;
      /* background: ${({ theme }) => theme.colors.fourthcolor}; */
      /* background: ${({ theme }) => theme.colors.fourthcolor};
        display: flex;
        justify-content: center;
        align-items: center; */
      visibility: none;
      transition: ease-out 0.5s;
      z-index: 1111;
    }
    .hidefilter .filter-section {
      display: none;
    }
    .hidefilter .closemenu {
      display: none;
    }

    .close-container {
      /* display: none; */
      width: 100%;
      /* padding: 0.6rem; */

      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;
      margin-top: 3rem !important;
    }
    .closemenu {
      display: block;
      padding: 1rem 1.2rem !important;
      background: ${({ theme }) => theme.colors.firstcolor} !important;
      color: ${({ theme }) => theme.colors.fourthcolor} !important;
      border: none;
      outline: none;
    }
    .tab-option {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      margin: 1rem 0;
    }
    .products-sort {
      width: 100%;
    }
    .show-menu {
      padding: 1rem 1.2rem !important;
      background: ${({ theme }) => theme.colors.firstcolor} !important;
      color: ${({ theme }) => theme.colors.fourthcolor} !important;
      border: none;
      outline: none;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    .showfilter {
      width: 300px;
    }
  }
`;

export default Shop;
