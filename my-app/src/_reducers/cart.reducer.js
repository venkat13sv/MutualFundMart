import { userConstants } from '../_constants/user.constant.js';



//let cart1 = JSON.parse(localStorage.getItem('cart'));
//const initialState = cart1 ? { loggedIn: true, cart } : {};
const initialState = {
    orders: []
};
export function cart(state=initialState, action) {
  switch (action.type) {
    case userConstants.ADD_CART:{
    console.log("Item added");
    return Object.assign({}, state, {
              orders: [...state.orders, action.item]
          });
    }
    case userConstants.DELETE_CART:{
    const newOrders = state.orders.filter((item) => item.sname !== action.item.sname);
        return {...state, orders: newOrders }
    }
    case userConstants.DELETE_ALL:
      return {};
  default:
    {
      console.log("Initial State");
      return state;
    }
  }
}
