import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const abrirCarrinhoSlice = createSlice({
    name: 'abrirCarrinho',
    initialState: false,
    reducers: {
        toggleState: (state) => !state,
    }
})

export const { toggleState } = abrirCarrinhoSlice.actions;
export default abrirCarrinhoSlice.reducer;