import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Itens {
  title: string;
  photo: string;
  price: number;
  id: number;
  quantidade?: number;
}

const initialState: Itens[] = [
  {
    title: "Pão Babka",
    photo: "/assets/pratos/pão-babka.png",
    price: 7,
    id: 1,
  },
  {
    title: "Baguete",
    photo: "/assets/pratos/pao-baguete.png",
    price: 54.0,
    id: 2,
  },
  {
    title: "Pão com Frango",
    photo: "/assets/pratos/pão-com-frango.png",
    price: 58.0,
    id: 3,
  },
  {
    title: "Croassaunt",
    photo: "/assets/pratos/pão-croissant.png",
    price: 42.0,
    id: 4,
  },
  {
    title: "Pão do Frade",
    photo: "/assets/pratos/pao-do-frade.png",
    price: 86.0,
    id: 5,
  },
  {
    title: "Bolo de Chocolate com Morango",
    photo: "/assets/pratos/bolo-de-chocolate-com-morango.png",
    price: 123.0,
    id: 6,
  },
  {
    title: "Bolo de Fubá com Goiaba",
    photo: "/assets/pratos/bolo-de-fuba-com-goiabada.png",
    price: 45.0,
    id: 7,
  },
  {
    title: "Bolo Doce de Laranja",
    photo: "/assets/pratos/bolo-doce-de-laranja.png",
    price: 37.0,
    id: 8,
  },
  {
    title: "Capuchino",
    photo: "/assets/pratos/cafe_capuchino.png",
    price: 120.0,
    id: 9,
  },
  {
    title: "Macchiato",
    photo: "/assets/pratos/cafe-macchiato.png",
    price: 120.0,
    id: 10,
  },
  {
    title: "Suco de Abacaxi",
    photo: "/assets/pratos/suco-natural-de-abacaxi.png",
    price: 120.0,
    id: 11,
  },
  {
    title: "Suco de Maracujá",
    photo: "/assets/pratos/suco-natural-de-maracujá.png",
    price: 120.0,
    id: 12,
  },
];

const itensSlice = createSlice({
  name: "itens",
  initialState,
  reducers: {
    setLista: (state, action: PayloadAction<Itens[]>) => {
      return action.payload;
    },
  },
});

export const { setLista } = itensSlice.actions;
export default itensSlice.reducer;
