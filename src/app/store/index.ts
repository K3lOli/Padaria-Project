import {configureStore} from '@reduxjs/toolkit';
import textInputReducer from './reducers/textInput';
import carrinhoReducer from './reducers/carrinho';
import itensReducer from './reducers/itens';
import abrirCarrinho from './reducers/abrirCarrinho';

const store = configureStore({
    reducer: {
        text: textInputReducer,
        carrinho: carrinhoReducer,
        itens: itensReducer,
        abrirCarrinho: abrirCarrinho
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;