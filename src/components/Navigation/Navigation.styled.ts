import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  text-decoration: none;
  color: snow;
  font-weight: 500;
  width: 90px;
  height: 40px;

  &.active {
    color: white;
    background-color: #146fac;
  }
`;
export const Header = styled.header`
  background-color: #272424b9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;

  padding: 15px;
  gap: 50px;
`;

export const AuthBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const Title = styled.h1`
  color: snow;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
`;
