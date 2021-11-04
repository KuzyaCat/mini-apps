import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser(state, action) {
      const { user } = action.payload;
      return {
        ...state,
        user,
      };
    },

    setUsers(state, action) {
      const { users } = action.payload;
      return {
        ...state,
        users,
      };
    },

    fetchUser() {},
    fetchUsers({ eventId, gender }) {},
  },
});

export const usersActions = usersSlice.actions;
export const usersReducer = usersSlice.reducer;


