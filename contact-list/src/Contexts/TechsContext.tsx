import { ReactNode, createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { iLoginResponse } from "./UserContext";

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
interface iTechContext {
  logout: () => void;
  dataUserTechs: iTech[];
  setDataUserTechs: React.Dispatch<React.SetStateAction<iTech[]>>;
  token: string;
  userData: string;
  courseModule: string;
  setBoleean: React.Dispatch<React.SetStateAction<boolean>>;
  updatedList: () => Promise<void>;
}
export const TechsContext = createContext<iTechContext>({} as iTechContext);

export const TechsContextProvider = ({ children }: iTechsContextsProps) => {
  const token = window.localStorage.getItem("authToken") || "";
  const userData = localStorage.getItem("@user-kenzieHub") || "";
  const courseModule = localStorage.getItem("course_module") || "";
  const [dataUserTechs, setDataUserTechs] = useState<iTech[]>([]);
  const [boleeanA, setBoleean] = useState<boolean>(true);

  const sucessLogout = (message: string) => {
    toast.success(message);
  };

  async function updatedList() {
    const token = window.localStorage.getItem("authToken");
    token &&
      (await axios
        .get<iLoginResponse>(`https://kenziehub.herokuapp.com/profile`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // setDataUserTechs(res.data.techs);
        })
        .catch((err) => {}));
  }

  useEffect(() => {
    updatedList();
  }, [boleeanA]);

  const logout = () => {
    window.localStorage.removeItem("authToken");
    // navigate("/login");
    sucessLogout("Sua sessão foi encerrada com sucesso!");
  };

  return (
    <TechsContext.Provider
      value={{
        logout,
        token,
        userData,
        dataUserTechs,
        setDataUserTechs,
        courseModule,
        setBoleean,
        updatedList,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
