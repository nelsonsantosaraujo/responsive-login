import styled from 'styled-components';

// import BackgroundLogin from '../../assets/background-login.png';
import BackgroundLogin from '../../assets/background-image.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%),
              url(${BackgroundLogin}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 600px;

  section {
    max-width: 256px;

      h2 {
      font-size: 40px;
      line-height: 48px;
      color: #383E71;
      }

      p {
        font-weight: 16px;
        line-height: 20px;
        font-weight: 600;
        color: #989FDB;
        margin-top: 16px;
      }

      small {
        font-size: 14px;
        line-height: 20px;
        color: #989FDB;
        text-align: center;
        display: block;
        margin: 32px auto 0;

        
        a {
          display: block;
          text-decoration: none;
          
          span {
            color: #9626AC;
            text-decoration: underline;
          }
        }
      }

    }

`;

export const Form = styled.form`
  margin-top: 27px;

  label {
    font-size: 10px;
    color: #383E71;
    display: block;
    margin-top: 16px;
  }

  input {
    width: 100%;

    font-size: 10px;
    color: #989FDB; 

    padding: 16px;
    margin-top: 8px;
    border: 1px solid #989FDB;
    border-radius: 8px;

    &::placeholder {
      color: #989FDB;
    }

    &.error {
      border-color: #FF377F;
    }
  }

  div {
    margin: 8px 16px 0;
    font-size: 10px;
    color: #FF377F;
  }

  button {
    margin-top: 24px;
    padding: 14px 0;
    width: 100%;

    font-size: 16px;
    color: #FFF;

    border: 0;
    border-radius: 8px;

    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
    box-shadow: 0 10px 25px 0 #CF99DB;
  }
`;