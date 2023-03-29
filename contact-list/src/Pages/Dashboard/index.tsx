import { ContainerDashboard } from "./style";
// import { Navigate } from "react-router-dom";
// import logo from "../../Assets/Logo.png";
// import { ListOfTechnologies } from "../../Components/ListOfTechnologies";
import { ContactsContext } from "../../Contexts/ContactsContext";
import { useContext, useEffect} from "react";
// import axios from "axios";

// import { UserContext } from "../../Contexts/UserContext";

import { iLoginResponse, iUserContext, UserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { ContactRegister } from "../../Components/ContactRegister";
import { ListOfContacts } from "../../Components/ListContacts";

export interface iContextContactDashboard {
  setModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
  modalRegister: boolean;
}


export const Dashboard = () => {
  // const { logout} = useContext<iContactContext>(ContactsContext);
  // const [userAllData, setUserAllData] = useState<iDataUser>(
  //   {} as iDataUser
  // );
  const { setModalNewContactBoolean, modalNewContactBoolean } = useContext<iUserContext>(UserContext);
  const { userAllData, setUserAllData,dataUser, logout, listState} = useContext(ContactsContext);
 
useEffect(() => {
  dataUser();
}, [listState]);
  return (
    <>

    {modalNewContactBoolean? <ContactRegister/> : "" }
    
      {/* {token ? ( */}
        <ContainerDashboard>
        
          <header>
          <img className="logoIcon" src=  {userAllData?.profileImage} alt="" />
            <button onClick={() => logout()}>Sair</button>
          </header>

          <div className="containerInformationsProfile">
            <h2>Olá,
               {userAllData?.name}
               </h2>
            <p className="moduleUser">Contato Atual:
              {userAllData?.phone}
            </p>
            
          </div>
          <div className="containerTitleUl">
            <span>Contatos</span>
            
            <button
             onClick={() => setModalNewContactBoolean(true)}
             >+</button>
          </div>
          <main>
            <ListOfContacts></ListOfContacts>
          </main>
        </ContainerDashboard>
      {/* ) 
      // : ( */}
      {/* //   // <Navigate to="/login" replace /> */}
       

      {/* // )} */}
    </>
  );
};
