import React, { FormEvent, useCallback, useState } from 'react';
import { useRouter } from 'next/router'
import { Container, Background, Content, Form, FormGroup } from '../styles/pages/Home';
import { FiX } from 'react-icons/fi';


import api from '../services/api';

interface formData {
  email: string;
  password: string;
}

interface Response {
  token: string;
  name: string;
  email: string;
}

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const history = useRouter();

  const handleSubmit = useCallback( async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if(!emailPattern.test(email)) {
      setEmailIsValid(false);
      return;
    } else {
      setEmailIsValid(true);
    }

    if(!password) {
      setPasswordIsValid(false);
      return;
    } else {
      setPasswordIsValid(true);
    }

    const formData: formData = {
      email,
      password,
    };

    try {
      const response: Response = await api.post('users', formData);
      console.log(response);
      // history.push('/dashboard');

    } catch(err) {
      console.log(err);
    }

  }, [email, password]);

  return (
    <>
    <Container>
      <Background />
      <Content hasInputError={emailIsValid !== passwordIsValid}>
        <section>
          <h2>Olá, seja</h2>
          <h2>bem-vindo!</h2>
          <h4>
            Para acessar a plataforma,
            faça seu login.
          </h4>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL</label>
            <FormGroup isValid={emailIsValid}>
              <div>
                <input 
                  type="email" 
                  className="error" 
                  id="email" 
                  placeholder="user.name@mail.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <FiX size={16} color="#FF377F" />
              </div>
              <p>Digite um e-mail válido.</p>
            </FormGroup>

            <label htmlFor="password">SENHA</label>
            <FormGroup isValid={passwordIsValid}>
              <div>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="*******"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <FiX size={16} color="#FF377F" />
              </div>
              <p>Digite sua senha.</p>
            </FormGroup>

            <button type="submit">ENTRAR</button>
          </Form>
          <small>
            Esqueceu seu login ou senha?
            <a href="login">
              Clique <span>aqui</span>
            </a>
          </small>

        </section>
      </Content>
    </Container>
    </>

  )
}

export default Home;