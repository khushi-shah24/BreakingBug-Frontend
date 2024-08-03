import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
    reducer:{
        user: userReducer,
    }//In javascript, when defining an object literal , the key values pairs are seperated by colon not '=' sign
});

export default store;