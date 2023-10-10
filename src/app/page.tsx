'use client'

import Image from "next/image";
import Header from "./components/header/header";
import Feed from "./components/feed/feed";
import { Provider } from "react-redux";
import store from "./store";

export default function Home() {
  return (
      <div className="w-full flex flex-col items-center bg-[#F3EFEE]">
        <Header />
        <Feed />
      </div>
  );
}
