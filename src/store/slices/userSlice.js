import { readCookie } from "@/utils/readCookie";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: readCookie("user") || null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUser(state, action) {
            state.user = action.payload.user;
        },
    },
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;