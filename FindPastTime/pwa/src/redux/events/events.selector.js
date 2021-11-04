import { createSelector } from 'reselect';

export const getEventsSelector = createSelector(
  [state => state.events],
  eventsReducer => eventsReducer.events,
);

export const getEventSelector = createSelector(
  [state => state.events],
  eventsReducer => eventsReducer.event,
);


