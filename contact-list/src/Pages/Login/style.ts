import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 103, 129, 1);

  .containerLogo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 30px 0;
    width: 90%;
    max-width: 295.83px;

  }

  .containerFormLogin {
    width: 90%;
    max-width: 295.83px;
    background-color: rgba(33, 37, 41, 0.4);
    border-radius: 5px;
  }
  .ContainerTitleFormLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 30px 0;

    h3 {
      font-family: inter;
      font-style: bold;
      font-size: 18px;
      line-height: 28px;
      font-weight: 700;
      color: #f8f9fa;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 30px 0;
    width: 90%;
    gap: 10px;
  }
  label {
    margin: 0 0 0 5%;
    font-family: inter;
    font-style: regular;
    font-size: 9px;
    color: #f8f9fa;
  }
  input {
    font-family: inter;
    font-style: regular;
    font-size: 12.99px;
    line-height: 21.1px;
    width: 100%;
    height: 38px;
    border: none;
    background-color: rgba(52, 59, 65, 0.5);
    color: #868e96;
    margin: 0 5% 0 5%;
    border-radius: 3.2px;
    padding: 8px;
    font-weight: 400;
  }

  select {
    width: 100%;
    height: 38px;
    border: none;
    background-color: rgba(52, 59, 65, 1);
    color: #fff;
    margin: 0 0 0 5%;
    border-radius: 3.2px;
  }

  .btnLogin {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 38px;
    border: none;
    background-color: rgb(103, 58, 183, 0.6);
    color: #fff;
    border-radius: 3.2px;
    margin: 0 0 0 5%;
  }

  .btnLogin:hover {
    background-color: rgb(103, 58, 183);
  }
  .ancoraLinkRegister {
    margin: 0 auto;
    text-decoration: none;
    color: #fff;
    font-style: semi bold;
    font-size: 9.63px;
    line-height: 14px;
    color: rgba(134, 142, 150, 1);
    /* grey-1 */
  }
  .btnForRegister {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 38px;
    border: none;
    background-color: rgba(134, 142, 150, 0.2);
    color: #fff;
    border-radius: 3.2px;
    margin: 0 0 0 5%;
  }

  .btnForRegister:hover {
    background-color: rgb(103, 58, 183);;
  }

  .containerBtnRedirectRegister {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 30px 0;
    width: 90%;
    gap: 10px;
  }

  p {
    margin: 0 5%;
    font-size: 16px;
    color: #fff;
  }
`;
