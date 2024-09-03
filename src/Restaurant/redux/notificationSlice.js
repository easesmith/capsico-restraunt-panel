import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        isVisible: false, // Initially hidden
    },
    reducers:{
        showNotification(state) {
            state.isVisible = true
        },
        hideNotification(state) {
            state.isVisible = false
        }
    }
})

export const {showNotification, hideNotification} = notificationSlice.actions
export default notificationSlice.reducer