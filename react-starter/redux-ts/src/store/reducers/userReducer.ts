import { IUserState, UserActionTypes, UserAction } from '../../types/user';

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
}

export const userReducer = (state: IUserState = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { loading: true, error: null, users: action.payload };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: true, error: action.payload, users: [] };
    default:
      return state;
  }
}
