import { createSlice } from "@reduxjs/toolkit";
import blogs from "../core/services/blogDB";

let seting = createSlice({
    name: "blogsItem",
    initialState : {
        blogsItem : blogs.slice(0,4)
    },
    reducers : {
        onChange : (state,action) => {
            state.blogsItem = action.payload
        }
    }

})
export const { onChange } = seting.actions
export default seting.reducer