import { LiContact } from "./style";
// import { CardTechLi } from "../CardTechsLi";
import { useContext } from "react";
import { ContactsContext, iContact } from "../../Contexts/ContactsContext";


// export interface iTechProps {
//   id: string;
//   title: string;
//   status: string;
//   created_at: string;
//   updated_at: string;
// }


// export interface  iContact{
//   id: string;
//   name: string;
//   phone: string;
//   email: string;
//   profileImage: string;
//   createdAt: string;
//   updatedAt: string;
//   deletedAt: string;
// }
export interface iContactsProps {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}
// export const ListOfContacts = () => {
//   const { userAllData } = useContext(ContactsContext);

//   if (userAllData?.contacts?.length !== 0) {
//     let contacts = userAllData.contacts;;
//     return (
//       <LiContact>
//          {contacts.map((contact: iContact) => (
//         <p>{contact.name}</p>
//         ))}
//       </LiContact>
//     );
//   } else {
//     return <LiContact></LiContact>;
//   }
// };

export const ListOfContacts = () => {
  const { userAllData, setUserAllData } = useContext(ContactsContext);

  if (userAllData?.contacts?.length !== 0) {
    let contacts = userAllData.contacts;
    return (
      <LiContact>
         {contacts?.map((contact: iContact) => (
          <div className="cardContact">
            <img src={contact.profileImage} alt={contact.name}/>
             <p>{contact.name}</p>
          </div>
       
        ))}
      </LiContact>
    );
  } else {
    return <LiContact></LiContact>;
  }
};
