import { createSlice } from '@reduxjs/toolkit';

const initialState = { userId: null, token: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData(state, action) {
      const { token, userId } = action.payload;
      return {
        ...state,
        token,
        userId,
      };
    },

    login({ payload }) {},
    checkAuthData() {},
    register({ payload }) {},
    logout() {},

    setAuthErrors(state, action) {
      const { message } = action.payload;
      return { ...state, error: message };
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
