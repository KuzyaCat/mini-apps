import { createSelector } from 'reselect';

export const getUserSelector = createSelector(
  [state => state.users],
  usersReducer => usersReducer.user,
);

export const getUsersSelector = createSelector(
  [state => state.users],
  usersReducer => usersReducer.users,
);

