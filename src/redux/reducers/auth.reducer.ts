import * as types from '../types/auth.type'

export interface AuthState {
  user: string;
  token: string | null;
}

const initialState: AuthState = {
    user: '',
    token: null
  };
  
  const authReducer = (state: AuthState = initialState, action: any) => {
    // Handle your actions and update state accordingly
    switch (action.type) {
      // Add your action types here
      case types.LOGIN_SUCCESS:return{
        ...state as {},
        token:action.payload.token
      }
      case types.SET_USER:return{
        ...state as {},
        user:action.payload.user
      }
      default:
        return state;
    }
  };
  
  export default authReducer;
  