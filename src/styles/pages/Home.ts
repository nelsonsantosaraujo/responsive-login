import styled, { css } from 'styled-components';

import BackgroundLogin from '../../assets/background-login.png';

interface FormGroupProps {
  isValid: boolean;
}

interface ContentProps {
  hasInputError: boolean;
}
 
export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  @media(max-width: 425px){
    background-color: #130525;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundLogin}) no-repeat center;
  background-size: cover;

  @media(max-width: 425px){
    background-size: contain;
    background-position: top center;
  }
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 600px;
  height: 100vh;

  @media(max-width: 768px) {
    max-width: 455px;
  }

  @media(max-width: 425px) {
    flex: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  section {
    max-width: 256px;

    h2 {
    font-size: 40px;
    line-height: 48px;
    color: #383E71;
    }

    h4 {
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

    @media(max-width: 425px) {
      max-width: 311px;
      height: 54%;
      background: #FAF5FF;
      border-radius: 8px;
      padding: 24px;

      ${ props => 
          props.hasInputError && css`
            height: 57%;
          `
      }

      h2 {
        font-size: 24px;
        line-height: 32px;
        text-align: center;
      }

      h4 {
        font-size: 12px;
        line-height: 20px;
      }

      small {
        color: #FAF5FF;

        a {
          span {
            color: #FAF5FF;
          }
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

    @media(max-width: 425px) {
      box-shadow: none;
    }
  }


`;

export const FormGroup = styled.div<FormGroupProps>`
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 8px;
    border: 1px solid #989FDB;
    border-radius: 8px;

    ${ props =>
        !props.isValid && css`
          border-color: #FF377F;
        `
    }
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    padding: 16px;

    font-size: 10px;
    color: #989FDB; 

    &::placeholder {
      color: #989FDB;
    }

    /* Remove estilo do autocomplete */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: 0;
      -webkit-text-fill-color: #989FDB;
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  svg {
    margin-right: 16px;
    visibility: hidden;
    display: none;
    ${ props =>
        !props.isValid && css`
          visibility: visible;
          display: block;
        `
    }
  }

  p {
    margin: 8px 16px 0;
    font-size: 10px;
    color: #FF377F ;
    visibility: hidden;
    display: none;
    ${ props =>
        !props.isValid && css`
          visibility: visible;
          display: block;
        `
    }
  }
`;