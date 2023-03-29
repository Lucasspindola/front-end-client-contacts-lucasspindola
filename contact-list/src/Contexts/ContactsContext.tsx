import { ReactNode, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { boolean } from "yup";
// import { useEffect } from "react";
// import { iLoginResponse } from "./UserContext";

interface iTechsContextsProps {
  children: ReactNode;
}

export interface iTech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}
export interface iContact{
  id: string;
  name: string;
  email: string;
  phone: string;
  profileImage: string;
  created_at: string;
	updatedAt:string;
	deletedAt: null
}
export interface iDataUser {
  id: string;
  name: string;
  email: string;
  isAdm: boolean;
  created_at: string;
  isActive: boolean;
  phone: string;
  profileImage: string;
  contacts:iContact[]
}
export interface iContactContext {
  logout: () => void;
  userAllData: iDataUser;
  setUserAllData:  React.Dispatch<React.SetStateAction<iDataUser>>;
  dataUser:()=>Promise<void>;
  listState: boolean;
   setListState:  React.Dispatch<React.SetStateAction<boolean>>
}
// setBoleean: React.Dispatch<React.SetStateAction<boolean>>;
  // updatedList: () => Promise<void>;

export const ContactsContext = createContext<iContactContext>({} as iContactContext);

export const ContactsContextProvider = ({ children }: iTechsContextsProps) => {
  // const token = window.localStorage.getItem("authToken") || "";
  const navigate = useNavigate();

  const sucessLogout = (message: string) => {
    toast.success(message);
  };
  const [userAllData, setUserAllData] = useState<iDataUser>(
    {} as iDataUser
  );
  const [listState, setListState] = useState<boolean>(false);
  
  
  async function dataUser() {
    const token = window.localStorage.getItem("authToken");
    if (token) {
      try {
        return await axios
          .get(`http://localhost:3001/contacts`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setUserAllData(res.data);
            return
            
            // navigate("/dashboard");
          });
      } catch (error) {
        console.log(error, "ERRO AQUI")
        localStorage.removeItem("authToken");
        // navigate("/");
      }
    }
  }


  
  const logout = ()=> {
    window.localStorage.removeItem("authToken");
    navigate("/login");
    sucessLogout("Sua sessão foi encerrada com sucesso!");
  };

  return (
    <ContactsContext.Provider
      value={{
        logout,
        userAllData, 
        setUserAllData,
        dataUser,
        listState,
         setListState
        
      }}
      
    >
      
      {children}
    </ContactsContext.Provider>
  );
};
