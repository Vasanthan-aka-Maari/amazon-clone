// setup data layer
// We need this to track basket

import React, { useContext, createContext, useReducer } from "react";

// This is the data layer
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
