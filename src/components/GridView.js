import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../store/slices/cartSlice";
import { NavLink } from "react-router-dom";
import Star from "./Star";
const GridView = ({ gridview }) => {
  const dispatch = useDispatch();
  return (
    <>
      <GridWrapper>
        <div className="grid-view column">
          <div className="img-container">
            <img
              src={process.env.PUBLIC_URL + `/${gridview.images[0]}`}
              alt={gridview.name}
            />
            <div className="img-txt">
              <div
                className="cart-icon icon"
                onClick={() => dispatch(addtocart(gridview))}
              >
                <AiOutlineShoppingCart />
              </div>
              <div className="view-icon ">
                <NavLink
                  to={`/shop/${gridview.id}`}
                  className="icon"
                  location={gridview}
                >
                  <AiOutlineSearch />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="grid-body">
            <div className="h3">{gridview.name}</div>
            <div className="h3 grid-price">${gridview.price}</div>

            <Star stars={gridview.rating} />
          </div>
        </div>
      </GridWrapper>
    </>
  );
};
const GridWrapper = styled.div`
  .grid-view {
    width: inherit !important;
  }

  .img-container {
    width: 100% !important;
    height: 250px !important;
    position: relative !important;

    margin: 0 !important;
  }

  .img-txt .icon {
    font-size: 2rem;
    background: ${({ theme }) => theme.colors.fourthcolor};
    margin: 5px 0;
    /* padding: 5px; */
    padding: 0 !important;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.5s ease-in-out;
  }
  .img-container:hover {
    opacity: 0.8;
  }
  .img-container:hover .icon {
    opacity: 1;
  }
  .img-txt .icon:hover {
    color: ${({ theme }) => theme.colors.fourthcolor};
    background: ${({ theme }) => theme.colors.firstcolor};
  }

  .img-container img {
    width: 100% !important;
    height: 100% !important;
  }
  .img-txt {
    position: absolute;

    bottom: 0;
    right: 0;
    margin-right: 1rem;
    z-index: 10;
    transition: 0.5s ease-in-out;
  }

  .grid-body {
    width: 100%;
    height: 150px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 0 !important;
  }

  .grid-price {
    font-weight: 600;
    margin: 1rem 0;
  }
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
  }
`;

export default GridView;
