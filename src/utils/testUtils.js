import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import educationReducer from '../features/education/educationSlice';
import skillsSliceReducer from '../features/skills/skillsSlice';


function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
    education: educationReducer,
     skills:skillsSliceReducer
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
       {children}
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}


export * from "@testing-library/react";

export { render };
