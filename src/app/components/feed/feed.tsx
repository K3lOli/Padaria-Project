"use client";

import trigo from "../../../../public/assets/trigo.svg";
import colher from "../../../../public/assets/colher.svg";
import graos from "../../../../public/assets/graos_de_cafe.png";
import xicaraDeCafe from "../../../../public/assets/xicara_de_cafe.svg";
import imgBolo from "../../../../public/assets/Group 30.svg";
import Image from "next/image";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
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
  quantidade?: number;
};

type ItemNoCarrinho = {
  id: number;
  quantidade: number;
};

export default function Feed() {
  const temItem = useSelector((state: RootState) => state.carrinho);
  temItem.map((item) => console.log(item.item));

  const cartOpen = useSelector((state: RootState) => state.abrirCarrinho);
  const dispatch = useDispatch();

  const handleToggleClick = () => {
    console.log("Dispatching toggleState action");
    dispatch(toggleState());
    console.log(cartOpen);
  };

  const text = useSelector((state: RootState) => state.text);
  const quantidade = useSelector((state: RootState) =>
    state.carrinho.map((item) => item.quantidade)
  );
  const carrinho = useSelector((state: RootState) => state.carrinho);
  const carrinho1 = useSelector((state: RootState) => {
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

  const carrinhoVazio = carrinho.length === 0;

  const itensComValorTotal = carrinho.map((item) => item.price);

  const valoresTotais = itensComValorTotal.map(
    (preco, index) => preco * quantidade[index]
  );
  const total = valoresTotais.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

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
        className={`w-auto h-[13.1vw] mb-[2.6vw] cart-icon ${
          cartOpen ? "cart-open" : ""
        }`}
      />
      <div className=""></div>
      <div
        className={`cart ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        } rounded-2xl fixed top-0 right-0 w-[600px] h-full bg-[#EDDCED] overflow-y-auto transition-transform bg-opacity-70 backdrop-blur-sm duration-300 ease-in-out transform flex flex-col items-center justify-between`}
      >
        <div className="flex flex-col justify-start items-center">
          <div>
            <h1 className="text-black text-[1.6rem] mt-10">
              Carrinho de Compras
            </h1>
          </div>
          <button
            onClick={handleToggleClick}
            className="w-4 h-4 bg-red-600 rounded flex justify-center items-center absolute top-10 right-10"
          >
            x
          </button>
          {carrinhoVazio ? (
            <div className="w-[500px] h-30 text-[40px] mt-[30vh] flex flex-col items-center">
              <h1>seu carrinho está vazio</h1>{" "}
              <AiOutlineShoppingCart size={80} />{" "}
            </div>
          ) : (
            carrinho.map((item) => (
              <CardCarrinho key={item.id} {...item} carrinho />
            ))
          )}
        </div>

        <div className="w-[300px] h-[200px] flex flex-col justify-end gap-4 mb-10 mt-10">
          <div className="text-[20px] w-[300px] h-10 text-black flex items-center justify-between">
            <h1>Total: </h1>
            <div className="text-[30px] flex">R$ {total},00</div>
          </div>
          <div className="w-[300px] h-[70px] bg-red-600 rounded-2xl flex justify-center items-center">
            Finalizar Compra
          </div>
        </div>
      </div>
      <label
        htmlFor="search-input"
        className="flex items-center w-[52vw] h-[60px] rounded-full bg-[#180E19] pl-10 gap-3"
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
