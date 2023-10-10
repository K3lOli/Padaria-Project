"use client";

import trigo from "../../../../public/assets/trigo.svg";
import colher from "../../../../public/assets/colher.svg";
import graos from "../../../../public/assets/graos_de_cafe.png";
import xicaraDeCafe from "../../../../public/assets/xicara_de_cafe.svg";
import imgBolo from "../../../../public/assets/Group 30.svg";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import Itens from "../itens/itens";
import { RootState } from "@/app/store";
import { setText } from "@/app/store/reducers/textInput";
import boloPersonalizado from "../../../../public/assets/bolos-de-aniversário.svg";
import bolo1 from "../../../../public/assets/82428-removebg-preview 1.svg";
import bolo2 from "../../../../public/assets/bolo-doce-leite-cordeiro--1- 1.svg";
import bolo3 from "../../../../public/assets/bolos-de-aniversário_naked-cake-removebg-preview 2.svg";
import bolo4 from "../../../../public/assets/facebook-removebg-preview 1.svg";
import bolo5 from "../../../../public/assets/images-removebg-preview 1.svg";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import Item from "../itens/itens";
import Card from "../card/card";
import { useState } from "react";
import { toggleState } from "@/app/store/reducers/abrirCarrinho";
import CardCarrinho from "../cardCarrinho/cardCarrinho";

type Item = {
  id: number;
  title: string;
  photo: string;
  price: number;
};

type ItemNoCarrinho = {
  id: number;
};

export default function Feed() {

  const [cartItems, setCartItems] = useState([]);

  const cartOpen = useSelector((state: RootState) => state.abrirCarrinho);
  const dispatch = useDispatch();

  const handleToggleClick = () => {
    console.log("Dispatching toggleState action");
    dispatch(toggleState());
    console.log(cartOpen);
  };

  const text = useSelector((state: RootState) => state.text);
  const carrinho = useSelector((state: RootState) => {
    const carrinhoReduce: Item[] = state.carrinho.reduce(
      (itens: Item[], itemNoCarrinho: ItemNoCarrinho) => {
        const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
        if (item) {
          itens.push({ ...item });
        }
        return itens;
      },
      []
    );
    return carrinhoReduce;
  });


  return (
    <div className="flex flex-col items-center min-w-[60vw] max-w-[70vw]">
      <Image
        src={trigo}
        width={500}
        height={216}
        alt="bolo de chocolate"
        className={`w-[15vw] mb-[2.6vw] absolute top-72 right-0`}
      />
      <Image
      src={graos}
      width={500}
      height={216}
      alt="bolo de chocolate"
      className={`w-[15vw] mb-[2.6vw] absolute bottom-[-900px] right-0`}
    />
    <Image
      src={colher}
      width={500}
      height={216}
      alt="bolo de chocolate"
      className={`w-[15vw] mb-[2.6vw] absolute bottom-[-900px] left-0`}
    />
      <Image
        src={xicaraDeCafe}
        width={1000}
        height={216}
        alt="bolo de chocolate"
        className={`w-[23vw] mb-[2.6vw] absolute top-32 left-0`}
      />
      <Image
        src={imgBolo}
        width={1000}
        height={216}
        alt="bolo de chocolate"
        className={`w-auto h-[13.1vw] mb-[2.6vw] cart-icon ${cartOpen ? 'cart-open' : ''}`}
      />
      <div className="">
        
      </div>
      <div className={`cart ${cartOpen ? 'translate-x-0' : 'translate-x-full'} rounded-2xl fixed top-0 right-0 w-[30vw] h-full bg-[#EDDCED] overflow-y-auto transition-transform duration-300 ease-in-out transform flex flex-col items-center`}>
        <h1 className="text-black text-[1.6rem] mt-10">Carrinho de Compras</h1>
        <button onClick={handleToggleClick} className="close-button mt-4 mx-2 cursor-pointer text-black">[x]</button>
        {carrinho.map((item) => (
          <CardCarrinho key={item.id} {...item} carrinho />
        ))}
      </div>
      <label
        htmlFor="search-input"
        className="flex items-center w-[52vw] h-[3vw] rounded-full bg-[#180E19] pl-10 gap-3"
      >
        <AiOutlineSearch size={32} />
        <input
          id="search-input"
          type="text"
          value={text}
          onChange={(e) => dispatch(setText(e.target.value))}
          className="focus:outline-none text-white w-[40vw] h-min bg-transparent"
          placeholder="Digite alguma coisa gostosa..."
        />
      </label>
      <Itens />
      <div className="mt-32">
        <h3 className="text-[2.25rem] text-black text-center">
          Crie o seu bolo personalizado e torne seu
          <br />
          evento muito mais delicioso e especial
        </h3>
        <Image
          src={boloPersonalizado}
          width={700}
          height={490}
          alt="bolo de chocolate"
          className="w-[45.438rem] h-[31.063rem] mb-[2.375rem]"
        />
      </div>
      <div className="flex gap-[3.8vw] w-auto">
        <Image
          src={bolo1}
          width={700}
          height={490}
          alt="bolo de chocolate"
          className="w-[10.76vw]  mb-[2.375rem]"
        />
        <Image
          src={bolo2}
          width={700}
          height={490}
          alt="bolo de chocolate"
          className="w-[10.76vw]  mb-[2.375rem]"
        />
        <Image
          src={bolo3}
          width={700}
          height={490}
          alt="bolo de chocolate"
          className="w-[10.76vw]  mb-[2.375rem]"
        />
        <Image
          src={bolo4}
          width={700}
          height={490}
          alt="bolo de chocolate"
          className="w-[10.76vw]  mb-[2.375rem]"
        />
        <Image
          src={bolo5}
          width={700}
          height={490}
          alt="bolo de chocolate"
          className="w-[10.76vw]  mb-[2.375rem]"
        />
      </div>
      <div className="w-full h-44 bg-[#784444] flex flex-col items-center">
        <h1 className="mt-10">ENTRE EM CONTATO!</h1>
        <div className="flex gap-10">
          <BsWhatsapp size={32} className="mt-10" />
          <AiOutlineInstagram size={32} className="mt-10" />
        </div>
      </div>
    </div>
  );
}
