import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        isVisible: false, // Initially hidden
        isOpen: false,
    },
    reducers:{
        showNotification(state) {
            state.isVisible = true
            
        },
        hideNotification(state) {
            state.isVisible = false
        },
        handleIsOpen(state,action) {
            state.isOpen = action.payload;
        }
    }
})

export const {showNotification, hideNotification,handleIsOpen} = notificationSlice.actions
export default notificationSlice.reducer