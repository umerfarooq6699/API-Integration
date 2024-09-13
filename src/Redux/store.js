import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slice"

const store=configureStore({
    reducer:{
        Data:dataSlice
    }
})

export default store