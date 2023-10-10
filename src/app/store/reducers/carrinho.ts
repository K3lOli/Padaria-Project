import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  photo?: string;
  title?: string;
  price?: number;
}

const initialState: Item[] = [];

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    mudarCarrinho: (state, action: PayloadAction<number>) => {
        const temItem = state.some((item) => item.id === action.payload);
        if (!temItem) {
          // Adicione um novo item ao carrinho se ele não existir
          state.push({ id: action.payload });
        } else {
          // Remova o item do carrinho se ele já existir
          return state.filter((item) => item.id !== action.payload);
        }
      },
    },
  }
);

export const { mudarCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
