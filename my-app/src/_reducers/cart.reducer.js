import { userConstants } from '../_constants/user.constant.js';



//let cart1 = JSON.parse(localStorage.getItem('cart'));
//const initialState = cart1 ? { loggedIn: true, cart } : {};
const initialState = {
    orders: []
};
export function cart(state=initialState, action) {
  switch (action.type) {
    case userConstants.ADD_CART:{
    let isExists=false,cart=state.orders;
    cart.map(cartItem =>{
      if(cartItem._id==action.item._id)
          {
            isExists=true;

          }

    });
    
    if(isExists)
      return state;
    else
      return Object.assign({}, state, {
              orders: [...state.orders, action.item]
          });
    }
    case userConstants.DELETE_CART:{
    const newOrders = state.orders.filter((item) => item._id !== action.id);
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
