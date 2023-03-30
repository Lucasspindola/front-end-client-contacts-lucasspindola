import { LiContact } from "./style";
import { useContext } from "react";
import { ContactsContext, iContact } from "../../Contexts/ContactsContext";

export interface iContactsProps {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export const ListOfContacts = () => {
  const { userAllData, contactDelete,setUpdateState, setIdContactToUpdate,updateDataContact} = useContext(ContactsContext);
   
  const stateIdUpdate= async(idContact: string)=>{
    await updateDataContact(idContact)
    setIdContactToUpdate(idContact)
    
    setUpdateState(true)
   }
  if (userAllData?.contacts?.length !== 0) {
    let contacts = userAllData.contacts;
    return (
      <LiContact>
        
         {contacts?.map((contact: iContact) => (
          <div key={contact?.id} className="cardContact">
            <img src={contact.profileImage}  alt="picts_profile"/>
            <div className="infoContacts">
            <span> Nome: {contact.name}</span>
             <span> Email: {contact.email}</span>
             <span> Cel: {contact.phone}</span>
            </div>
            <div className="containerBtnsContactsEditAnDelete">
            <button key={contact.id} className="btnsContactsEditAndDelete" onClick={()=>{stateIdUpdate(contact.id)}} >Editar</button>
            <button  className="btnsContactsEditAndDelete" onClick={()=> contactDelete(contact?.id)}>Deletar</button>
            </div>
           
          </div>
      
        ))}
      </LiContact> 
    );
  } else {
    return <LiContact></LiContact>;
  }
};
