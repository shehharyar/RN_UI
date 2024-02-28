import { createSlice } from '@reduxjs/toolkit';


const initialAuthState= {
    token: '',
    isAuthenticated: false
};


export const authSlice = createSlice({
    name:'authentication',
    initialState: initialAuthState,
    reducers:{
        authenticate( state, action ){
            state.token= action.payload;
            state.isAuthenticated= true;
        },
        logout(state){
            state.token= null;
            state.isAuthenticated= false;
        }
    }
});


export const authActions= authSlice.actions;
export default authSlice.reducer;
