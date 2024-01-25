import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./products-api";

export const productsStore = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware)=> {
        return getDefaultMiddleware()
            .concat(productsApi.middleware)    
    }
})

setupListeners(productsStore.dispatch);

