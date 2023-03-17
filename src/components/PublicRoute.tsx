// import authSelectors from 'redux/selectors';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../redux/store';
import { getIsloggedIn } from '../redux/auth/authSelectors';

interface IProps {
  component: React.ReactElement;
}

export const PublicRoute = ({ component }: IProps) => {
  // const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const isLoggedIn = useAppSelector(getIsloggedIn);
  return !isLoggedIn ? component : <Navigate to="/contacts" />;
  // return component;
};
