import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "../Authslice/AuthSlice";



 export const store=configureStore({
    reducer:{
        data:authSlice

    }
 })

