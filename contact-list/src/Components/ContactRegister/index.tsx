import { ContainerRegisterTech, Container } from "./style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { ContactsContext } from "../../Contexts/ContactsContext";
import { iUserContext, UserContext } from "../../Contexts/UserContext";
// import { useContext } from "react";
// import { UserContext } from "../../Contexts/UserContext";
// import { TechsContext } from "../../Contexts/TechsContext";

// interface iContactRegister {
//   setModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
// }

interface iNewTechResponse {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export const ContactRegister = () => {



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iNewContact>();
  // interface iNewTech {
  //   status: string;
  //   title: string;
  // }
  interface iNewContact{
    name: string;
    email: string;
    phone: string;
    profileImage?: string
  }

  const { setModalNewContactBoolean, modalNewContactBoolean } = useContext<iUserContext>(UserContext);
  const {setListState, listState} = useContext(ContactsContext);
  const newContact = (dataTech: iNewContact) => {
    const token = window.localStorage.getItem("authToken");
    axios
      .post(
        "http://localhost:3001/contacts",
        dataTech,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        res && toast.success("Cadastro realizado com sucesso!");
       
        setModalNewContactBoolean(false);
        setListState(!listState)
        // setBoleean((old) => !old);
      })
      .catch((err) => {
        // console.log(err)
        err.name &&
          toast.error(`Ops!!Verifique se você já tem a tecnologia cadastrada!`);
      });
  };

  return (
    <Container>
      <ContainerRegisterTech onSubmit={handleSubmit(newContact)}>
        <div className="titleContainerTech">
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
          <button type="submit" className="btnRegisterTech">
            Cadastrar
          </button>
        </form>
      </ContainerRegisterTech>
    </Container>
  );
};
