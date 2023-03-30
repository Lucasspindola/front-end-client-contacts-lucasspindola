import { Container,  ContainerUpdateContact } from "./style";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { ContactsContext, iContactContext, iNewContact, IUpdateNewDataContact } from "../../Contexts/ContactsContext";
import { iUserContext, UserContext } from "../../Contexts/UserContext";




export const ContactsUpdateModal = () => {
  const { setUpdateState, updateContactNewData,contactEditState } = useContext<iContactContext>(ContactsContext);
  const {newContact, dataUser} = useContext(ContactsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateNewDataContact>();

  const [nameState, setName] = useState(contactEditState?.name);
  const [emailState, setEmail] = useState(contactEditState?.email);
  const [profileImageState, setProfileImage] = useState(contactEditState?.profileImage);
  const [phoneState, setPhone] = useState(contactEditState?.phone);

  return (
    <Container>
      <ContainerUpdateContact 
     
      >
        <div className="titleContainerContact">

          <h3>Editar Contato</h3>
          <button
            onClick={() => {
              setUpdateState(false);
            }}
            className="btnExitRegister"
          >
            X
          </button>
        </div>
        <form className="formRegister" 
         onSubmit={handleSubmit(updateContactNewData)}
         >
          <div className="contains">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              placeholder="Editar nome"
              defaultValue={nameState}
              {...register("name")}
            />
          </div>
          <div className="contains">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Editar email"
              defaultValue={emailState}
              {...register("email")}
            />
          </div>
          <div className="contains">
            <label htmlFor="phone">Editar</label>
            <input
              id="phone"
              placeholder="Editar número"
              defaultValue={phoneState}
              {...register("phone")}
            />
          </div>
          <div className="contains">
            <label htmlFor="profileImage">Imagem</label>
            <input
              id="profileImage"
              placeholder="Editar imagem(opcional)"
              defaultValue={profileImageState}
              {...register("profileImage")}
            />
          </div>
          <button type="submit" className="btnRegisterContact">
            Editar
          </button>
        </form>
      </ContainerUpdateContact>
    </Container>
  );
};
