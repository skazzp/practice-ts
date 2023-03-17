import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { useAppDispatch } from '../../redux/store';
// import { login } from 'redux/auth/operations';
import { Container, Form, Label } from './Login.styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      default:
        return;
    }
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
    console.log(user);
  };
  return (
    <Container>
      <Form action="submit" onSubmit={handleFormSubmit}>
        <Label>
          Email
          <input type="email" name="email" value={email} onChange={handleChange} />
        </Label>
        <Label>
          Password
          <input type="password" name="password" value={password} onChange={handleChange} />
        </Label>
        <button type="submit">Login</button>
      </Form>
    </Container>
  );
};

export default Login;
