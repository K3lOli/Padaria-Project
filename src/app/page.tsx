'use client'

import Image from "next/image";
import Header from "./components/header/header";
import Feed from "./components/feed/feed";
import InitialPage from "./pages/initialPage";
import { Provider } from "react-redux";
import store from "./store";

export default function Home() {
  return (
      <div>
        <InitialPage/>
      </div>
  );
}
