import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    apidatacopy: [],
    filterProducts: [],
    sorting_value: "lowest",
    show: "",
    grid: true,
    showingCount: "",
    filerCount: "",
    filters: {
      text: "",
      categories: "All",
      maxPrice: 0,
      price: "",
      // minPrice: 0,
    },
  },
  reducers: {
    filterData(state, action) {
      const data = [...action.payload];
      let pricearr = data.map((cur) => cur.price);
      console.log(pricearr);
      let maxprice = Math.max(...pricearr);
      // let minprice = Math.min(...pricearr);

      return {
        ...state,
        apidatacopy: data,
        filterProducts: data,
        filters: {
          ...state.filters,
          maxPrice: maxprice,
          price: maxprice,
        },
      };
    },
    getInput(state, action) {
      let { name, value } = action.payload;
      console.log(value);
      return {
        ...state,

        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    },
    updateFilterProducts(state, action) {
      let { apidatacopy } = state;
      let temProducts = [...apidatacopy];
      console.log(action.payload + "smsjhjshjhs");
      const { text, categories, price, minPrice } = state.filters;

      if (text) {
        temProducts = temProducts.filter((cur) =>
          cur.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      if (categories !== "All") {
        temProducts = temProducts.filter(
          (cur) => cur.category.name === categories
        );
      }

      if (price === 0) {
        temProducts = temProducts.filter((cur) => cur.price === price);
      } else {
        temProducts = temProducts.filter((currElem) => currElem.price <= price);
      }
      let sowingCount = temProducts.length;

      return {
        ...state,
        filterProducts: temProducts,
        filerCount: sowingCount,
      };
    },
    sorting(state, action) {
      state.sorting_value = action.payload;
    },
    sortproducts(state, action) {
      let { filterProducts, sorting_value } = state;

      let temp = [...filterProducts];

      let newsortproducts = temp.sort((a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
        if (sorting_value === "popularity") {
          return b.rating - a.rating;
        }
      });

      return {
        ...state,
        filterProducts: newsortproducts,
      };
    },
    clearfilters(state, action) {
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          categories: "All",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: 0,
        },
      };
    },
    shownoproducts(state, action) {
      state.show = action.payload;
    },

    changeLayout(state, action) {
      state.grid = action.payload;
    },
    displayProducts(state, action) {
      let { apidatacopy, show } = state;
      let tempcount = [...apidatacopy];
      if (show > tempcount.length) {
        state.show = tempcount.length;
      }
      const { text, categories, price, minPrice, maxPrice } = state.filters;
      if (!text) {
        state.showingCount = show;
      }
      if (categories === "All") {
        state.showingCount = show;
      }
      if (price === maxPrice) {
        state.showingCount = show;
      }
    },
    addproducts(state, action) {
      state.show += action.payload;
    },
  },
});

export const {
  filterApi,
  filterData,
  sorting,
  sortproducts,
  getInput,
  updateFilterProducts,
  clearfilters,
  shownoproducts,
  addproducts,
  changeLayout,
  displayProducts,
} = filterSlice.actions;

export default filterSlice.reducer;
