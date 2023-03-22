import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: ''
}
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data.map((users) => userSlice.id))
});
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder =>{
        builder.addCase(fetchUsers.pending, state => {
            state.loading = false
        })
        builder.addCase(fetchUsers.fulfilled, state => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.fulfilled, state => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
});

export default userSlice.reducer;