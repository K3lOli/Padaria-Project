import cardapio from "./itens.json";
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Card from "../card/card";
import { RootState } from "@/app/store";
import { setLista } from "@/app/store/reducers/itens";

interface Itens {
  title: string;
  photo: string;
  price: number;
  id: number;
}

export default function Itens() {

    const busca = useSelector((state: { text: string }) => state.text);
    const lista = useSelector((state: {itens: Itens[]}) => state.itens);
    const dispatch = useDispatch();
    const listaInicialRef = React.useRef(lista).current;


  function testaBusca(title: string) {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  }

  useEffect(() => {
    const resetLista = () => {
      dispatch(setLista(listaInicialRef));
    };
    const novaLista = listaInicialRef.filter((item) => (testaBusca(item.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) || testaBusca(item.title)));
    dispatch(setLista(novaLista));
    if (busca === '') {
      resetLista();
    }
  }, [busca, dispatch])
  
  return (
    <div className="flex justify-center w-[60vw]">
      <div className="flex flex-wrap justify-center gap-4 mb-10 w-[60vw]">
        {lista.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
    </div>
  );
}
