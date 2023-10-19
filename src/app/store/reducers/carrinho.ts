import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { access } from "fs";

interface Item {
  id: number;
  title: string,
  price: number,
  quantidade: number;
  photo: string;
  item: boolean;
}

const initialState: Item[] = [];

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    addCarrinho: (state, action: PayloadAction<Item>) => {
      const temItem = state.some((item) => item.id === action.payload.id);
      if (!temItem) {
        // Adicione um novo item ao carrinho se ele não existir
        state.push({ id: action.payload.id, quantidade: 1, item: true, price: action.payload.price, title: action.payload.title, photo: action.payload.photo});
      }
    },
    removeCarrinho: (state, action: PayloadAction<number>) => {
      const itemIdToRemove = action.payload;
      const index = state.findIndex((item) => item.id === itemIdToRemove);
      if (index !== -1) {
        state.splice(index, 1); // Remove o item do carrinho
      }
    },
    incrementarCarrinho: (state, action: PayloadAction<number>) => {
      const temItem = state.find((item) => item.id === action.payload);
      if (temItem) {
        temItem.quantidade += 1;
      } else {
        state.push({ id: action.payload, quantidade: 1, item: true, price: 0, title: "", photo: ""});
      }
    },
    decrementarCarrinho: (state, action: PayloadAction<number>) => {
      const temItem = state.find((item) => item.id === action.payload);
      const itemIdToRemove = action.payload;
      const index = state.findIndex((item) => item.id === itemIdToRemove);
      if(temItem){
        temItem.quantidade -=1;
      }
      if(temItem?.quantidade === 0){
        state.splice(index, 1);
      }
    },
  }});

export const { addCarrinho, removeCarrinho, incrementarCarrinho, decrementarCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
