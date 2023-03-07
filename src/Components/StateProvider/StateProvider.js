import React, { useContext, useEffect, useReducer } from "react";
import { auth } from "../../firebase";
import { reducer } from "../Reducer/Reducer";

export const DataContext = React.createContext();

function StateProvider({ children }) {
  const initialState = {
    basket: [],
    user: null,
  };

  const AddToCart = (id) => {
    // console.log(state.basket
    dispatch({ type: "ADD_TO_BASKET", payload: id });
  };

  const RemoveCart = (id) => {
    // console.log(state.basket
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };

  const RemoveAllCart = (id) => {
    // console.log(state.basket
    dispatch({ type: "REMOVE_ALL_FROM_BASKET", payload: id });
  };

  const SigninUser = (user) => {
    // console.log(state.basket
    dispatch({ type: "SET_USER", payload: user });
  };
  
  const SignoutUser = () => {
    // console.log(state.basket
    dispatch({ type: "SET_USER_LOGOUT", payload: null });
  };

    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        authUser ? dispatch({ type: 'SET_USER', payload: authUser })
          :  dispatch({type: 'SET_USER', payload: null})

      });
    }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider
      value={{
        ...state,
        AddToCart,
        RemoveCart,
        SigninUser,
        SignoutUser,
        RemoveAllCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataGlobaly = () => {
  return useContext(DataContext);
};

export default StateProvider;

// const {basket} = initialState  -> object destructuring

// dispatch is for manager create the task (for transfering orders)
// reducer is for accomplishing the task

// state is an object that stores the current state of the application. 
// dispatch is an object that stores the function that will be called when the state changes.