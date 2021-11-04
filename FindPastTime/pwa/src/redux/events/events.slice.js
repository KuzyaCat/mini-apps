import { createSlice } from '@reduxjs/toolkit';

const initialState = { events: null };

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents(state, action) {
      const { events } = action.payload;
      return {
        ...state,
        events,
      };
    },

    setEvent(state, action) {
      const { event } = action.payload;
      return {
        ...state,
        event,
      };
    },

    fetchEvents(userId) {},
    fetchEventById(id) {},
    createUserEvent({ userId, eventId }) {},
  },
});

export const eventsActions = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;

