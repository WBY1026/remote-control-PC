import { configureStore } from "@reduxjs/toolkit";

import connectionReducer  from '@/store/modules/connectionStore'

const store = configureStore({
    reducer: {
        connection: connectionReducer,
    }
})

export default store

export type RootDispatch = typeof store.dispatch