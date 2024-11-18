import { configureStore } from "@reduxjs/toolkit";

import errorSlice from "./slices/errorSlice";
import userSlice from "./slices/userSlice";
import loadingSlice from "./slices/loadingSlice";

export const store = configureStore({
    reducer: {
        error: errorSlice,
        user: userSlice,
        loading: loadingSlice,
    }
});