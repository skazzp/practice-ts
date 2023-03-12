// import authSelectors from 'redux/selectors';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

interface IProps {
  component: React.ReactElement;
}

export const PublicRoute = ({ component }: IProps) => {
  // const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  // return !isLoggedIn ? component : <Navigate to="/contacts" />;
  return component;
};
