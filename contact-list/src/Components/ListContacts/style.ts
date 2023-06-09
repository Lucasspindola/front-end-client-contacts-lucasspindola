import styled from "styled-components";

export const LiContact = styled.ul`
  display: flex;
  flex-direction: column;
 align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(33, 37, 41, 0.4);;
  border-radius: 4px;
  margin: 0 5%;
  gap: 20px;
  padding: 20px 0;
  .cardContact{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    background: url("sua-imagem.jpg");
    position: relative;
    overflow: hidden;
    background-size: cover;
    opacity: 0.8;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 5px;
    img{
      
    border-radius: 100%;
 
    width: 80px;
    height: 70px;
   
    padding-right: 10px;
    }

    .infoContacts{
      display: flex;
      flex-direction: column;
      
      width: 33%;
      word-wrap: break-word;
    }
    .containerBtnsContactsEditAnDelete{
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 2px;
      gap: 2px;
    }
    .btnsContactsEditAndDelete{
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 50px;
    cursor: pointer;
    border: none;
    background-color: rgb(103, 58, 183, 0.4);
    color: rgba(255, 255, 255, 0.7);
    border-radius: 3.2px;
    margin: 0 0 0 5%;
    }

    .btnsContactsEditAndDelete:hover {
    background-color: rgb(103, 58, 183);
    color: #fff
  }
  }
  
.cardContact:before {
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

.cardContact:after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(315deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%);
  transform: skewY(10deg);
  transform-origin: 0;
}

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 13px 8px;
    width: 90%;
    margin: 0 5%;
    background-color: rgba(18, 18, 20, 1);
    div {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
    button {
      display: flex;
      background-color: transparent;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 700px) {
    margin: 0 0;
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 13px 8px;

      div {
        display: flex;
        flex-direction: row;
        gap: 20px;
        button {
          display: block;
          background-color: transparent;
          color: #fff;
          border: none;
          cursor: pointer;
        }
      }
    }
  }
`;
