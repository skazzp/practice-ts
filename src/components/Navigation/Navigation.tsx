// import UserMenu from '../UserMenu/UserMenu';
// import authSelectors from 'redux/selectors';
import { useSelector } from 'react-redux';
import { AuthBox, Header, Link, Title } from './Navigation.styled';

const Navigation = () => {
  //   const isLoggedIn = useSelector(authSelectors.getIsloggedIn);

  return (
    <Header>
      <Title>PhoneBook</Title>

      {/* {!isLoggedIn ? ( */}
      <>
        <AuthBox>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </AuthBox>
      </>
      {/* ) : (
        <UserMenu />
      )} */}
    </Header>
  );
};

export default Navigation;
