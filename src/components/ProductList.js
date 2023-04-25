import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  filterData,
  shownoproducts,
  addproducts,
  displayProducts,
  updateFilterProducts,
} from "../store/slices/filterSlice";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = ({ apidata }) => {
  const dispatch = useDispatch();
  const { filterProducts, filters, grid, show } = useSelector(
    (state) => state.filter
  );
  useEffect(() => {
    dispatch(filterData(apidata));
    dispatch(shownoproducts(6));
  }, [apidata]);

  useEffect(() => {
    dispatch(updateFilterProducts());
    dispatch(displayProducts(filterProducts.slice(0, show).length));
  }, [filters, show]);

  return (
    <>
      <PrdouctListWrapper>
        <div className="shop-prod">
          {grid === true ? (
            <div className="columns">
              {filterProducts.slice(0, show).map((cur) => {
                return (
                  <div className="three-column" key={cur.id}>
                    <GridView gridview={cur} />
                  </div>
                );
              })}
            </div>
          ) : (
            filterProducts.slice(0, show).map((cur) => {
              return (
                <div className="list-row" key={cur.id}>
                  <ListView list={cur} />
                </div>
              );
            })
          )}
          <div className="show-products">
            <button
              onClick={() => dispatch(addproducts(6))}
              className="show-more"
            >
              Show More
            </button>
          </div>
        </div>
      </PrdouctListWrapper>
    </>
  );
};
const PrdouctListWrapper = styled.div`
  .shop-prod {
    width: 100% !important;
    height: 100% !important;
  }

  .columns {
    width: inherit !important;

    display: flex;
    flex-flow: row wrap !important;
    justify-content: space-between !important;
  }

  .three-column {
    width: 330px !important;
    /* max-width: 100% !important; */
    height: 400px !important;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    margin-bottom: 1rem;
    /* flex-grow: 2 !important; */
    /* display: flex; */
    /* justify-content: center; */
    /* padding: 0;
      flex:1; */
  }

  .list-row {
    width: 100% !important;
    height: 300px !important;
    margin-bottom: 1rem !important;
  }
  .show-products {
    width: inherit !important;

    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 1300px) {
    .three-column {
      width: 300px !important;
      padding: 0 !important;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.media.desktop}) {
    .three-column {
      width: 47% !important;
      padding: 0 !important;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.media.tab}) {
    .three-column {
      width: 47% !important;
      padding: 0 !important;
    }
    .list-row {
      width: 100% !important;
      height: 100% !important;
      margin-bottom: 1rem !important;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.media.small}) {
    .three-column {
      width: 100% !important;
      padding: 0 !important;
    }
  }
`;

export default ProductList;
