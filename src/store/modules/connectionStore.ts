
import { createSlice } from "@reduxjs/toolkit";

const connectionState = createSlice({
    name: 'connection',
    initialState: {
        test: '',
        connectionList: []
    },
    reducers: {
        changeTest(state, action) {
            state.test = action.payload
        }
    }
})

const { changeTest } = connectionState.actions

const reducer = connectionState.reducer

export { changeTest }

export default reducer