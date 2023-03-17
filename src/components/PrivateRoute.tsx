// import authSelectors from 'redux/selectors';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getIsloggedIn } from '../redux/auth/authSelectors';

interface IProps {
  component: React.ReactElement;
}

export const PrivateRoute = ({ component }: IProps) => {
  const isLoggedIn = useSelector(getIsloggedIn);
  return isLoggedIn ? component : <Navigate to="/login" />;
  // return component;
};
