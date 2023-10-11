import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { access } from "fs";

interface Item {
  id: number;
  quantidade: number;
  item: boolean;
}

const initialState: Item[] = [];

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    addCarrinho: (state, action: PayloadAction<number>) => {
      const temItem = state.some((item) => item.id === action.payload);
      if (!temItem) {
        // Adicione um novo item ao carrinho se ele não existir
        state.push({ id: action.payload, quantidade: 1, item: true});
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
        state.push({ id: action.payload, quantidade: 1, item: true });
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
