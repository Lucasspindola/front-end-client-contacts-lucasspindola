import { Container, ContainerRegisterContact } from "./style";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ContactsContext, iNewContact } from "../../Contexts/ContactsContext";
import { iUserContext, UserContext } from "../../Contexts/UserContext";




export const ContactRegister = () => {
  const { setModalNewContactBoolean } = useContext<iUserContext>(UserContext);
  const {newContact} = useContext(ContactsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iNewContact>();

  return (
    <Container>
      <ContainerRegisterContact onSubmit={handleSubmit(newContact)}>
        <div className="titleContainerContact">
          <h3>Cadastrar Contato</h3>
          <button
            onClick={() => {
              setModalNewContactBoolean(false);
            }}
            className="btnExitRegister"
          >
            X
          </button>
        </div>
        <form className="formRegister">
          <div className="contains">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              placeholder="Nome do novo contato"
              {...register("name")}
            />
          </div>
          <div className="contains">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Email do novo contato"
              {...register("email")}
            />
          </div>
          <div className="contains">
            <label htmlFor="phone">Celular</label>
            <input
              id="phone"
              placeholder="Celular do novo contato"
              {...register("phone")}
            />
          </div>
          <div className="contains">
            <label htmlFor="profileImage">Imagem</label>
            <input
              id="profileImage"
              placeholder="imagem do contato(opcional)"
              {...register("profileImage")}
            />
          </div>
          <button type="submit" className="btnRegisterContact">
            Cadastrar
          </button>
        </form>
      </ContainerRegisterContact>
    </Container>
  );
};
