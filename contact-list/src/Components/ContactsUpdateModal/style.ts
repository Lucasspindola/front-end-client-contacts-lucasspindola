import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  min-width: 100vw;
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 37, 41, 0.5);
  
`;
export const ContainerUpdateContact = styled.div`

  min-height: 274px;
  
  width: 100%;
  position: absolute;
  background-color:red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;


  
    
    background: url("sua-imagem.jpg");
    position: relative;
    overflow: hidden;
    background-size: cover;
    opacity: 0.8;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 5px;
   


:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%);
  transform: skewY(-10deg);
  transform-origin: 0;
}

:after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(315deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 95%);
  transform: skewY(10deg);
  transform-origin: 0;
}
  
  .formRegister {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    
  }
  .formRegister {
    opacity: 1;
  }
  .contains {
    width: 100%;
    /* height: 10%; */
    display: flex;
    flex-direction: column;
    select {
      cursor: pointer;
    }
  }
  input {
    background-color: rgba(52, 59, 65, 1);
    height: 30px;
    border-radius: 4px;
    color: rgba(248, 249, 250, 1);
    width: 90%;
    margin: 0 5%;
  }

  h3 {
    margin: 0 0 0 5%;
    color: rgba(248, 249, 250, 1);
    font-family: inter;
    font-size: 14px;
    font-style: bold;
    line-height: 24px;
    font-weight: 700;
  }
  .btnExitRegister {
    cursor: pointer;
    margin: 0 5%;
    background-color: transparent;
    border: none;
    font-size: 18px;
    color: rgba(248, 249, 250, 1);
  }
  label {
    margin: 0 5%;
    color: rgba(248, 249, 250, 1);
    font-family: inter;
    font-size: 14px;
    font-style: bold;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .titleContainerContact {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    border-radius: 3px 3px 0 0;
    width: 100%;
    background-color: #343b41;
    border-radius: 3px 3px 0 0;
  }
  .btnRegisterContact {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    height: 38px;
    border: none;
    background-color:rgb(103, 58, 183, 0.6);
    color: #fff;
    border-radius: 3.2px;
    margin-bottom: 20px;
  }




  .btnRegisterContact:hover {
    background-color: rgb(103, 58, 183);
  }
  @media only screen and (min-width: 700px) {
    height: 342px;
    width: 369px;

    display: flex;
    /* margin: 0 34%; */
  }
`;
