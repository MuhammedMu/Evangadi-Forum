// import {
//   Accessories,
//   LaptopsData,
//   ProductsData,
// } from "../ProductsData/ProductsData";
import { auth } from "firebase/auth";

// console.log(auth)

export const reducer = (state, action) => {
  // if (action.type === "ADD_TO_BASKET") {
  //   if (action.payload <= 10) {
  //     const newItem = ProductsData.find(
  //       (product) => product.id === action.payload
  //     );
  //     // localStorage.setItem
  //     return {
  //       ...state,
  //       basket: [...state.basket, newItem],
  //     };
  //   } else if (action.payload <= 20) {
  //     const newItem = Accessories.find(
  //       (product) => product.id === action.payload
  //     );
  //     return {
  //       ...state,
  //       basket: [...state.basket, newItem],
  //     };
  //   } else {
  //     const newItem = LaptopsData.find(
  //       (product) => product.id === action.payload
  //     );
  //     return {
  //       ...state,
  //       basket: [...state.basket, newItem],
  //     };
  //   }
  // }

  // if (action.type === "REMOVE_FROM_BASKET") {
  //   const newItem = state.basket.filter((product) => {
  //     return product.id !== action.payload;
  //   });

  //   return {
  //     ...state,
  //     basket: newItem,
  //   };
  // }

//   if (action.type === "REMOVE_ALL_FROM_BASKET") {
//     return {
//       ...state,
//       basket: [],
//     };
//   }
// console.log(state)
  
  
  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.payload,
    };
  }


  if (action.type === "SET_USER_LOGOUT") {
    return {
      ...state,
      user: null,
    };
  }
};
