import { Head } from 'next/document';
import React from 'react';

import { Container, Background, Content, Form } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <>
    <Container>
      <Background />
      <Content>
        <section>
          <h2>
            Olá, seja 
            bem-vindo!
          </h2>
          <p>
            Para acessar a plataforma,
            faça seu login.
          </p>
          <Form>
            <label htmlFor="email">E-MAIL</label>
            <input type="email" className="error" id="email" placeholder="user.name@mail.com" />
            <div>Digite um e-mail válido.</div>

            <label htmlFor="password">SENHA</label>
            <input type="password" id="password" placeholder="*******" />

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