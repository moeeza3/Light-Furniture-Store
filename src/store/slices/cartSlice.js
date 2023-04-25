import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    totalCount: 0,
    total: 0,
  },
  reducers: {
    addtocart(state, action) {
      let cartData = state.cart.find((cur) => {
        if (cur.id == action.payload.id) {
          return {
            ...cur,
          };
        }
      });
      if (cartData) {
        cartData.totalquantity += action.payload.totalquantity;

        cartData.totalprice = cartData.totalquantity * cartData.price;
      } else {
        state.cart.push(action.payload);
        state.quantity++;
      }
      let cartCount = state.cart.map((cur) => cur.totalquantity);
      let cartfinalcount = cartCount.reduce((acc, val) => acc + val, 0);

      state.totalCount = cartfinalcount;
      let carttotal = state.cart.map((cur) => cur.totalprice);
      let cartfinaltotal = carttotal.reduce((acc, val) => acc + val, 0);
      state.total = cartfinaltotal;
    },
    deleteItem(state, action) {
      let delitem = state.cart.filter((cur) => cur.id !== action.payload);
      let findremoved = state.cart.find((cur) => cur.id == action.payload);

      return {
        ...state,
        cart: delitem,
        quantity: state.quantity - 1,
        totalCount: state.totalCount - findremoved.totalquantity,
        total: state.total - findremoved.totalprice,
      };
    },
  },
});

export const { addtocart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
