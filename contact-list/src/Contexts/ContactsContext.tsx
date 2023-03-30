import { ReactNode, createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { iUserContext, UserContext } from "./UserContext";
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
	deletedAt: null
}
export interface iNewContact{
  name: string;
  email: string;
  phone: string;
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
  const [listState, setListState] = useState<boolean>(false);
 
  const [deleteContactState, setDeleteContactState] = useState<boolean>(false);
  
  
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
    await axios
      .delete(`http://localhost:3001/contacts/${id}`, {
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
  const { setModalNewContactBoolean } = useContext<iUserContext>(UserContext);
  const newContact = (data: iNewContact) => {
    const token = window.localStorage.getItem("authToken");

    if(data?.profileImage === ""){
      console.log(data)

      data.profileImage= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJGlDRZM5zsQv-p66Q6MYlWMqYgokxPNLOw&usqp=CAU";
      console.log(data)
      axios
      .post(
        "http://localhost:3001/contacts",
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
      axios
      .post(
        "http://localhost:3001/contacts",
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
        newContact
      
      }}
      
    >
      
      {children}
    </ContactsContext.Provider>
  );
};
