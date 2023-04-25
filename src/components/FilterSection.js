import React from "react";
import { getInput, clearfilters } from "../store/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
const FilterSection = () => {
  const dispatch = useDispatch();
  const {
    filters: { text, price, minPrice, maxPrice },
  } = useSelector((state) => state.filter);
  const { apidata } = useSelector((state) => state.api);

  const handleinput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    dispatch(getInput({ name, value }));
  };

  const getUniqueValues = (data, attr) => {
    let simpData = data.map((cur) => cur[attr].name);

    return (simpData = ["All", ...new Set(simpData)]);
  };

  const categoryList = getUniqueValues(apidata, "category");

  const getuniquecat = (data, attr) => {
    let sData = data.reduce(
      (acc, cur) =>
        Object.assign(acc, {
          [cur[attr].name]: (acc[cur[attr].name] || 0) + 1,
        }),
      {}
    );
    let len = data.length;

    return (sData = { All: len, ...sData });
  };

  let catlist = getuniquecat(apidata, "category");

  return (
    <>
      <FilterWrapper>
        <div className="filter-section">
          <div className="filter-section-container ">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="text"
                id="text"
                className="p form-input-text"
                value={text}
                placeholder="Search Your Product"
                onChange={handleinput}
              />
            </form>

            <div className="category">
              <div className="category-title title">
                <h1>Category</h1>
              </div>
              {categoryList.map((cur, index) => {
                return (
                  <div className="category-container" key={index}>
                    <button
                      name="categories"
                      className="p categories"
                      value={cur}
                      onClick={handleinput}
                    >
                      {cur}{" "}
                      <span>
                        {Object.keys(catlist).map((curEl) => curEl) !== cur
                          ? catlist[cur]
                          : "null"}
                      </span>{" "}
                    </button>
                  </div>
                );
              })}
            </div>

            <hr />

            <div className="price">
              <div className="price-title title">
                <h1>Price</h1>
              </div>
              <div className="price-container">
                <h4>${price}</h4>
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  className="rs-range"
                  value={price}
                  name="price"
                  onChange={handleinput}
                />
              </div>
            </div>
            <hr />
            <div className="reset">
              <div className="reset-container">
                <button
                  className="reset-btn p"
                  onClick={() => dispatch(clearfilters())}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </FilterWrapper>
    </>
  );
};

const FilterWrapper = styled.div`
  .filter-section {
    width: 100% !important;
    height: inherit !important;
  }

  .form-input-text {
    width: 100%;
    padding: 0.6rem;
    outline: none !important;
    border: 1px solid #ced4da !important;
  }
  .title {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.firstcolor};
  }
  .price-title {
    margin-top: 0.5rem;
  }
  .category {
    margin: 0.5rem 0;
  }

  .category-container {
    width: 100% !important;
  }
  .categories {
    width: 100%;
    text-align: left;
    padding: 0.7rem 0.7rem 0.7rem 0;
    background: ${({ theme }) => theme.colors.fourthcolor} !important;
    border: none;
    margin: 0.5rem 0;
    display: flex !important;
    justify-content: space-between;
  }

  .categories:hover {
    text-decoration: underline;
  }

  .price-container {
    margin-bottom: 0.5rem;
  }
  .count:hover {
    text-decoration: none !important;
  }
  .rs-range {
    width: 100%;
    -webkit-appearance: none;
    margin: 1rem 0 !important;
  }
  .rs-range:focus {
    outline: none;
  }
  .rs-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    box-shadow: none;
    background: ${({ theme }) => theme.colors.firstcolor} !important;
    border-radius: 0px;
    border: 0px solid ${({ theme }) => theme.colors.firstcolor};
  }

  .rs-range::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    box-shadow: none;
    background: ${({ theme }) => theme.colors.secondcolor} !important;
    border-radius: 0px;
    border: 0px solid ${({ theme }) => theme.colors.firstcolor};
  }

  .rs-range::-webkit-slider-thumb {
    box-shadow: none;
    border: 0px solid ${({ theme }) => theme.colors.secondcolor};
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    height: 22px;
    width: 22px;
    border-radius: 22px;
    background: ${({ theme }) => theme.colors.firstcolor} !important;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }

  .rs-range::-moz-range-thumb {
    box-shadow: none;
    border: 0px solid ${({ theme }) => theme.colors.fourthcolor} !important;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    height: 22px;
    width: 22px;
    border-radius: 22px;
    background: #1b263b;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }
  .rs-range::-moz-focus-outer {
    border: 0;
  }

  .reset {
    width: 100% !important;
    margin-top: 1rem;
  }

  .reset-btn {
    width: 100% !important;
    padding: 1rem 0;
    background: ${({ theme }) => theme.colors.firstcolor} !important;
    color: ${({ theme }) => theme.colors.fourthcolor} !important;
    border: none;
    outline: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.media.tab}) {
    .filter-section {
      width: 100% !important;
      z-index: 10;
    }
  }
`;

export default FilterSection;
