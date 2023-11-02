import { configureStore } from "@reduxjs/toolkit";
import blogsItem from "./seting"

let store = configureStore({
    reducer : {
        blogsItem
    }
})


export default store