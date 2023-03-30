import { ReactNode, createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iUserContext, UserContext } from "./UserContext";

import { instance } from "../Services/api";
interface iContactsContextsProps {
  children: ReactNode;
}
export interface iContact{
  id: string;
  name: string;
  email: string;
  phone: string;
  profileImage: string;
  created_at: string;
	updatedAt:string;
	deletedAt: null | string
}

interface IRequestUpdateContact{
  name?: string;
  email?: string;
  phone?: string;
  profileImage?:null| string;

}
export interface iNewContact{
  name: string;
  email: string;
  phone: string;
  profileImage?: null|string
}

export interface IUpdateNewDataContact{
  name?: string;
  email?: string;
  phone?: string;
  profileImage?: null|string
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
interface userId{
  id:string
}
interface IResponseUpdateContact{
  id:string;
  name:string;
  phone:string;
  email:string;
  profileImage:string;
  createdAt:string;
  updatedAt:string;
  deletedAt:null|string;
  user:userId
}
export interface iContactContext {
  logout: () => void;
  userAllData: iDataUser;
  setUserAllData:  React.Dispatch<React.SetStateAction<iDataUser>>;
  dataUser:()=>Promise<void>;
  listState: boolean;
  setListState:  React.Dispatch<React.SetStateAction<boolean>>;
  deleteContactState: boolean;
  setDeleteContactState:React.Dispatch<React.SetStateAction<boolean>>;
  contactDelete:(id: string) => Promise<void>;
  token: string;
  newContact: (data: iNewContact) => void;
  updateState: boolean;
  setUpdateState:  React.Dispatch<React.SetStateAction<boolean>>,
  idContactToUpdate: string;
   setIdContactToUpdate: React.Dispatch<React.SetStateAction<string>>;
   contactEditState:iContact;
   updateDataContact:(id: string)=> Promise<iContact | undefined>;
   updateContactNewData: (data: IRequestUpdateContact) => void
}

export const ContactsContext = createContext<iContactContext>({} as iContactContext);

export const ContactsContextProvider = ({ children }: iContactsContextsProps) => {
  const token = window.localStorage.getItem("authToken") || "";
  const navigate = useNavigate();

  const sucessLogout = (message: string) => {
    toast.success(message);
  };
  const [userAllData, setUserAllData] = useState<iDataUser>(
    {} as iDataUser
  );
  const [contactEditState, setContactEditState] = useState<iContact>({
    id: "",
    name: "",
    email: "",
    phone: "",
    profileImage: "",
    created_at: "",
    updatedAt: "",
    deletedAt: null
  });
  const [listState, setListState] = useState<boolean>(false);
  const [updateState, setUpdateState] = useState<boolean>(false);
  const [idContactToUpdate, setIdContactToUpdate] = useState<string>("");
  const [deleteContactState, setDeleteContactState] = useState<boolean>(false);
  
  
  async function dataUser() {
    const token = window.localStorage.getItem("authToken");
    if (token) {
      try {
        return await instance
          .get(`contacts`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            if(res.data.profileImage=== ""){
              res.data.profileImage= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJGlDRZM5zsQv-p66Q6MYlWMqYgokxPNLOw&usqp=CAU";}
             
            setUserAllData(res.data);
            return
          });
      } catch (error) {
        console.log(error)
        localStorage.removeItem("authToken");
        navigate("/");
      }
    }
  }

  const contactDelete = async (id: string) => {
    const token = window.localStorage.getItem("authToken");
    await instance
      .delete(`contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setListState(!listState)
        res && toast.success("Deletado com sucesso!");
      })
      .catch((err) => {
        err && toast.error("Ops, houve um erro, tente novamente!");
      });
  };
  
  const logout = ()=> {
    window.localStorage.removeItem("authToken");
    navigate("/login");
    sucessLogout("Sua sessão foi encerrada com sucesso!");
  };
  const { setModalNewContactBoolean} = useContext<iUserContext>(UserContext);
  const newContact = (data: iNewContact) => {
    const token = window.localStorage.getItem("authToken");

    if(data?.profileImage === ""){
      data.profileImage= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJGlDRZM5zsQv-p66Q6MYlWMqYgokxPNLOw&usqp=CAU";
     
      instance
      .post(
        "contacts",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        res && toast.success("Contato criado com sucesso!");
       
        setModalNewContactBoolean(false);
        setListState(!listState)

      })
      .catch((err) => {
        console.log(err?.message)
        err.name &&
          toast.error(`Ops!!Verifique se você já tem um cadastro similar!`);
      });
    }else{
      instance
      .post(
        "contacts",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        res && toast.success("Contato criado com sucesso!");
       
        setModalNewContactBoolean(false);
        setListState(!listState)
      })
      .catch((err) => {
        console.log(err?.message)
        err.name &&
          toast.error(`Ops!!Verifique se você já tem um cadastro similar!`);
      });
    }
  };


 
  const updateContactNewData = (data: IRequestUpdateContact) => {
    const token = window.localStorage.getItem("authToken");
    instance
      .patch<IResponseUpdateContact>(
        `contacts/${idContactToUpdate}`,
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
        setUpdateState(false)
        setListState(!listState)
      })
      .catch((err) => {
        err &&
          toast.error("Ops!! Algo errado aconteceu.Tente mais tarde!");
      });
  };


  async function updateDataContact(id: string) {
    const token = window.localStorage.getItem("authToken");
    if (token) {
      try {
        return await instance
          .get<iContact>(`users/contact/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            let dataContact= res.data
            setContactEditState(dataContact);
            return dataContact
          });
      } catch (error) {
        console.log(error)
      }
    }
  }
  

  return (
    <ContactsContext.Provider
      value={{
        logout,
        userAllData, 
        setUserAllData,
        dataUser,
        listState,
        setListState,
        deleteContactState,
        setDeleteContactState,
        contactDelete,
        token,
        newContact,
        updateState,
        setUpdateState,
        idContactToUpdate,
        setIdContactToUpdate,
        contactEditState,
        updateDataContact,
        updateContactNewData
      }}
      
    >
      
      {children}
    </ContactsContext.Provider>
  );
};
