import { RootState } from '../store';
interface Auth {
  isLoggedIn: boolean;
  isLoading: boolean;
}
// interface RootState {
//   auth: Auth;
// }
export const getIsloggedIn = (state: RootState) => state.auth.isLoggedIn;
export const getIsLoading = (state: RootState) => state.auth.isLoading;
