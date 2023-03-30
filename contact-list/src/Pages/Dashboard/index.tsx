import { ContainerDashboard } from "./style";
import { ContactsContext, iContactContext } from "../../Contexts/ContactsContext";
import { useContext, useEffect} from "react";
import { iLoginResponse, iUserContext, UserContext } from "../../Contexts/UserContext";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ContactRegister } from "../../Components/ContactRegister";
import { ListOfContacts } from "../../Components/ListContacts";
import { ProfileDataUserUpdateModal } from "../../Components/ProfileDataUpdateModal";
import { ContactsUpdateModal } from "../../Components/ContactsUpdateModal";

export interface iContextContactDashboard {
  setModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
  modalRegister: boolean;
}


export const Dashboard = () => {

  const { setModalNewContactBoolean, modalNewContactBoolean, updateUserState, setUpdateUserState,userDataState } = useContext<iUserContext>(UserContext);
  const { userAllData,dataUser, logout, listState, token,updateState} = useContext(ContactsContext);
  
useEffect(() => {
  dataUser();
}, [listState,userDataState]);
  return (
    <>
    {updateState? <ContactsUpdateModal/>: "" }
    {modalNewContactBoolean? <ContactRegister/> : "" }
    {updateUserState? <ProfileDataUserUpdateModal/> : "" }
    
      {token ? (
        <ContainerDashboard>
        
          <header>
            <button className="btnProfileEdit" onClick={()=>setUpdateUserState(true)}>

              <img className="logoIcon" src=  {userAllData?.profileImage} alt="" />
              Editar
              </button>
          
            <button onClick={() => logout()}>Sair</button>
          </header>

          <div className="containerInformationsProfile">
            <h2>Olá, {userAllData?.name}</h2>
            <p className="contactCurrent">Contato Atual: {userAllData?.phone}</p>
            
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
       ) 
       : (
      <Navigate to="/login" replace />
       

       )} 
    </>
  );
};
