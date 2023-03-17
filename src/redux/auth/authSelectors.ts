// import { RootState } from '../store';
interface Auth {
  isLoggedIn: boolean;
}
interface RootState {
  auth: Auth;
}
export const getIsloggedIn = (state: RootState) => state.auth.isLoggedIn;
