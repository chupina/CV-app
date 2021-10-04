// import React from "react";
// import { render as rtlRender } from "@testing-library/react";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
// import usersReducer from "./redux/usersSlice";
// import visibilityReducer from "./redux/visibilitySlice";
// import profileReducer from "./redux/profileSlice";
// import subscriptionReducer from "./redux/subscribeSlice";


// function render(
//   ui,
//   {
//     preloadedState,
//     store = configureStore({
//       reducer: {
//         users: usersReducer,
//         visibility: visibilityReducer,
//         profile: profileReducer,
//         subscription: subscriptionReducer,
//       },
//       preloadedState,
//     }),
//     ...renderOptions
//   } = {}
// ) {
//   function Wrapper({ children }) {
//     return (
//       <Provider store={store}>
//        {children}
//       </Provider>
//     );
//   }
//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
// }


// export * from "@testing-library/react";

// export { render };
