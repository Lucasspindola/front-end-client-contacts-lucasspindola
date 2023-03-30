import React, { ReactNode, createContext, useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface iUserContextProps {
  children: ReactNode;
}

export interface iLoginResponse {
  id: string;
  name: string;
  email: string;
  isAdm: boolean;
  created_at: string;
  updated_at: string;
  isActive: boolean;
  phone: string;
  profileImage: string
}

interface iLoginToken {
  token: string;
  user: iLoginResponse;
}
export interface IUpdateResponse{
  
  updatedAt: string,
  createdAt: string,
  isActive: false,
  id: string,
  isAdm: boolean,
  email: string,
  name: string

}

export interface IUpdateUserRequest {
  name?: string;
  email?: string;
  password?: string;
  profileImage?: string;
  phone?: string
}

export interface iRegisterUser {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  isAdm: boolean;
  phone: string;
  profileImage:null|string;
}


export interface iLogin {
  email: string;
  password: string;
}

export interface iUserContext {
  loginUser: (data: iLogin) => void;
  registerUser: (data: iRegisterUser) => void;
  setModalNewContactBoolean: React.Dispatch<React.SetStateAction<boolean>>;
  modalNewContactBoolean: boolean;
  updateUserData:  (data: IUpdateUserRequest) => void;
  updateUserState:boolean;
  setUpdateUserState: React.Dispatch<React.SetStateAction<boolean>>
 
}
export const UserContext = createContext({} as iUserContext);

export const UserContextProvider = ({ children }: iUserContextProps) => {

  const [modalNewContactBoolean, setModalNewContactBoolean] = useState<boolean>(false);
  const [updateUserState, setUpdateUserState] = useState<boolean>(false);
  const navigate = useNavigate();


  const loginUser = (data: iLogin) => {
    axios
      .post<iLoginToken>("http://localhost:3001/login", data)
      .then((res) => {
        console.log(res.data.token)
        localStorage.removeItem("authToken");
        window.localStorage.setItem("authToken", res.data.token);
        res.data.token && toast.success("Login realizado com sucesso!");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err)
        toast.error(
          `Desculpe, ocorreu um erro. Por favor, revise as informações de seu cadastro e tente novamente.`
        );
      });
  };
  const sucessRegister = (message: string) => {
    toast(message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const registerUser = (data: iRegisterUser) => {
     
     if(data?.profileImage === ""){
      
      const {passwordConfirm, profileImage, ...newData } = data;
      newData.isAdm= false;
      axios
      .post<iLoginResponse>("http://localhost:3001/users", newData)
      .then((response) => {
        navigate("/login");
      console.log(response.data,"THEN, AQUI")
        sucessRegister("Registro realizado com sucesso!");
      })
      .catch((err) => {
        console.log(err, "ERRO> AQUII")

        toast.error(`Ops, houve um erro em nosso servidor. Tente novamente!`);
      });
     }else{

      const {passwordConfirm, ...newData } = data;
      newData.isAdm= false;

      axios
      .post<iLoginResponse>("http://localhost:3001/users", newData)
      .then((response) => {
        navigate("/login");
      console.log(response.data,"THEN, AQUI")
        sucessRegister("Registro realizado com sucesso!");
      })
      .catch((err) => {
        toast.error(`Ops, houve um erro em nosso servidor. Tente novamente!`);
      });
      
     }
    

  
  };
  
  const updateUserData = (data: IUpdateUserRequest) => {
    const token = window.localStorage.getItem("authToken");
    axios
      .patch<IUpdateResponse>(
        `http://localhost:3001/users`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        res && toast.success("Update realizado com sucesso!");
        setUpdateUserState(false);
      })
      .catch((err) => {
        err &&
          toast.error("Ops!! Algo errado aconteceu.Tente mais tarde!");
      });
  };



  return (
    <UserContext.Provider
      value={{
        loginUser,
        registerUser,
        modalNewContactBoolean, setModalNewContactBoolean,
        updateUserData,
        updateUserState,
         setUpdateUserState
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
