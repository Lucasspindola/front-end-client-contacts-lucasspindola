import React, { ReactNode, createContext, useState, useContext } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ContactsContext } from "./ContactsContext";
import { instance } from "../Services/api";

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
  setUpdateUserState: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUser: (idUserDelete: string) => void;
  userDataState: boolean;
  setUserDataState:React.Dispatch<React.SetStateAction<boolean>>
}
export const UserContext = createContext({} as iUserContext);

export const UserContextProvider = ({ children }: iUserContextProps) => {

  const [modalNewContactBoolean, setModalNewContactBoolean] = useState<boolean>(false);
  const [updateUserState, setUpdateUserState] = useState<boolean>(false);
  const [userDataState, setUserDataState] = useState<boolean>(false);
  const navigate = useNavigate();


  const loginUser = (data: iLogin) => {
    instance
      .post<iLoginToken>("login", data)
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
      instance.post<iLoginResponse>("/users", newData)
      .then((response) => {
        navigate("/login");
      
        sucessRegister("Registro realizado com sucesso!");
      })
      .catch((err) => {
        console.log(err, "ERRO> AQUII")

        toast.error(`Ops, houve um erro em nosso servidor. Tente novamente!`);
      });
     }else{

      const {passwordConfirm, ...newData } = data;
      newData.isAdm= false;

      instance
      .post<iLoginResponse>("users", newData)
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
    instance
      .patch<IUpdateResponse>(
        `users`,
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
        setUserDataState(!userDataState)
        setUpdateUserState(false);
        
        
        
      })
      .catch((err) => {
        err &&
          toast.error("Ops!! Algo errado aconteceu.Tente mais tarde!");
      });
  };


  const deleteUser = (idUserDelete: string) => {
    
    const token = window.localStorage.getItem("authToken");
    instance
      .delete(
        `users/${idUserDelete}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res)
        res && toast.success("Usuário deletado com sucesso! Até mais!");
        setUpdateUserState(false);
        navigate("/")
      })
      .catch((err) => {
        console.log(err)
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
         setUpdateUserState,
         deleteUser,
         userDataState,
          setUserDataState
        
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

