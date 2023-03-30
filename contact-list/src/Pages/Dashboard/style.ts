import styled from "styled-components";

export const ContainerDashboard = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(0, 103, 129);;
  color: #fff;
  img{
    border-radius: 100%;
    min-width: 50px;
    min-height: 50px;
    max-width:70px;
    max-height:70px ;
    
  }
  .btnProfileEdit{
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 5%;
    border-radius: 100%;
    width: 55px;
    height: 55px;
  }
  main {
    display: flex;
    padding: 30px 0;
  }
  header {
    height: 72px;
    width: 100%;
    border-bottom: solid 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      cursor: pointer;
      margin: 0 5%;
      height: 32px;
      width: 55.49px;
      border: none;
      border-radius: 4px;
      background-color: rgba(33, 37, 41, 1);
      color: #fff;
    }
  }

  .containerInformationsProfile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    border-bottom: solid 1px;
    min-height: 131px;
    h2 {
      margin: 0 5%;
    }
    p {
      margin: 0 5%;
    }
  }
  .contactCurrent {
    font-family: inter;
    font-style: Mixed;
    font-size: 12px;
    color: #868e96;
    font-weight: 400;
  }

  .explication {
    font-family: inter;
    font-style: Regular;
    font-size: 16px;
    line-height: 24px;
    color: #868e96;
    font-weight: 400;
    color: #ffffff;
  }
  
  .containerTitleUl {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    align-items: center;
    span {
      margin: 0 0 0 5%;
    }
    button {
      cursor: pointer;
      margin: 0 5% 0 0;
      background-color: #212529;
      color: #fff;
      width: 32px;
      height: 32px;
      font-size: 20px;
      font-family: Inter;
      font-style: semi bold;
      line-height: 16px;
    }
  }
  @media only screen and (min-width: 700px) {
    .btnProfileEdit{
    
    margin: 0 0 0 20%;
    
  }
    
    main {
      display: flex;
      flex-direction: column;
      padding: 30px 0;
      margin: 0 20% 0 20%;
      gap: 30px;
      
    }
    .containerInformationsProfile {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      h2 {
        margin: 0 0 0 20%;
      }
      p {
        margin: 0 20% 0 0;
      }
    }
    header {
      img {
        margin: 0 0 0 20%;
      }
      button {
        margin: 0 20% 0 0;
      }
    }

    .containerTitleUl {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 40px;
      span {
        margin: 0 0 0 20%;
      }
      button {
        margin: 0 20% 0 0;
        background-color: #212529;
        color: #fff;
        width: 32px;
        height: 32px;
      }
    }
  }
`;
