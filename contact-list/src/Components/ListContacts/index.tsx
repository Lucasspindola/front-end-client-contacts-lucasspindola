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
  const { userAllData, contactDelete } = useContext(ContactsContext);

  if (userAllData?.contacts?.length !== 0) {
    let contacts = userAllData.contacts;
    return (
      <LiContact>
         {contacts?.map((contact: iContact) => (
          <div className="cardContact">
            <img src={contact.profileImage}  alt="picts_profile"/>
            <div className="infoContacts">
            <span> Nome: {contact.name}</span>
             <span> Email: {contact.email}</span>
             <span> Cel: {contact.phone}</span>
            </div>
            <button key={contact.id} className="btnDeleteContact" onClick={()=> contactDelete(contact.id)}>Deletar</button>
          </div>
       
        ))}
      </LiContact> 
    );
  } else {
    return <LiContact></LiContact>;
  }
};
