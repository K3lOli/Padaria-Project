'use client'

import Home from "./page";
import store from "./store";
import { Provider } from "react-redux";

export default function ReduxProvider({children} : {children: React.ReactNode}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}