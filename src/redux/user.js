import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : "Hamid",
    initialState : {
        name : []
    },
    reducers : {
        onName : (state , action) => {
            state.name = action.payload
        }
    }
})

export const { onName } = user.actions
export default user.reducer