import { useState } from 'react';
import { register } from '../../redux/auth/authOperations';
import { useAppDispatch } from '../../redux/store';
import { Container, Form, Label } from './Registration.styled';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
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
    const user = { name, email, password };
    dispatch(register(user));
    console.log(user);
  };
  return (
    <Container>
      <Form action="submit" onSubmit={handleFormSubmit}>
        <Label>
          <p>Username</p>
          <input type="text" name="name" value={name} onChange={handleChange} required />
        </Label>
        <Label>
          <p>Email</p>
          <input type="email" name="email" value={email} onChange={handleChange} required />
        </Label>
        <Label>
          <p> Password</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </Label>
        <button type="submit">Register</button>
      </Form>
    </Container>
  );
};

export default Registration;
