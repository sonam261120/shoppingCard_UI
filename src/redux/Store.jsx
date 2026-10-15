import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './slice/CartSlice.jsx'
export const Store=configureStore(
    { 
       reducer:{
              CartSlice,
    }    
}
);