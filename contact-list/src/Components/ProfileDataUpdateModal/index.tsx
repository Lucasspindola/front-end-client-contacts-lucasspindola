import { ContainerUpdateDataUser, Container } from "./style";
import { useForm } from "react-hook-form";

import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { ContactsContext } from "../../Contexts/ContactsContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


export interface IUpdateUserRequest {
  name?: string;
  email?: string;
  password?: string;
  profileImage?: string;
  phone?: string
}

export interface IUpdateResponse{
  
    updatedAt: string,
    createdAt: string,
    isActive: false,
    id: string,
    isAdm: boolean,
    email: string,
    name: string
  
}
export interface IUpdateUser {
  name: string;
  email: string;
  password?: string;
  phone: string;
  profileImage:string;
}



export const ProfileDataUserUpdateModal = () => {
  const { userAllData,dataUser, logout, listState, token} = useContext(ContactsContext);
  const { updateUserData, setUpdateUserState,deleteUser} = useContext(UserContext);
  const [nameState, setName] = useState(userAllData?.name);
  const [emailState, setEmail] = useState(userAllData?.email);
  const [profileImageState, setProfileImage] = useState(userAllData?.profileImage);
  const [phoneState, setPhone] = useState(userAllData?.phone);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("Digite um email válido"),
    phone: yup.string().required("Campo obrigatório!").matches(
      /^[0-9]+$/,"fd"
    ).min(8, "Mínimo de 8 dígitos é necessário.").max(11, "Máximo de 11 dígitos é permitido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateUser>({
    resolver: yupResolver(schema),
  });
  
  return (
    <Container>
      <ContainerUpdateDataUser onSubmit={handleSubmit(updateUserData)}>
        <div className="titleContainerDataUser">
          <h3>Editar Informações</h3>
          <button
            onClick={() => {
              setUpdateUserState(false)
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
              placeholder="Novo nome de usuário"
              defaultValue={nameState}
              {...register("name")}
            />
          </div>
          {<p>{errors.name?.message}</p>}
          <div className="contains">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Novo Email"
              defaultValue={emailState}
              {...register("email")}
            />
          </div>
          {<p>{errors.email?.message}</p>}
          <div className="contains">
            <label htmlFor="profileImage">Imagem</label>
            <input
              id="profileImage"
              placeholder="Nova imagem de perfil"
              defaultValue={profileImageState}
              {...register("profileImage")}
              
            />
            
          </div>
          {<p>{errors.phone?.message}</p>}
          <div className="contains">
            <label htmlFor="phone">Contato</label>
            <input
              id="phone"
              placeholder="Novo contato"
              defaultValue={phoneState}
              {...register("phone")}
            />
          </div>
          {<p>{errors.phone?.message}</p>}
          
          <button type="submit" className="btnUpdateDataUser">
            Editar
          </button>
          
        </form>
        <button onClick={()=>{deleteUser(userAllData?.id)}} type="submit" className="btnUpdateDataUser">
            Deletar Usuário
        </button>
      </ContainerUpdateDataUser>
    </Container>
  );
};

