import { useContext } from "react";
import { iRegisterUser, UserContext } from "../../Contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { FcBusinessContact } from 'react-icons/fc';
// import logo from "../../Assets/Logo.png";

const testPassword = new RegExp("^(?=.*\\d).{8,}$");

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório!"),
  email: yup
    .string()
    .required("Campo obrigatório!")
    .email("Digite um email válido"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .matches(
      testPassword,
      "São obrigatórios pelo menos 8 caracteres, sendo pelo menos um numero."
    ),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatório!")
    .oneOf([yup.ref("password"), null], "É necessário que as senhas sejam idênticas."),
    profileImage: yup.string().notRequired(),
  phone: yup.string().required("Campo obrigatório!").matches(
    /^[0-9]+$/,"fd"
  ).min(8, "Mínimo de 8 dígitos é necessário.").max(11, "Máximo de 11 dígitos é permitido"),
});
export const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUser>({
    resolver: yupResolver(schema),
  });

  const { registerUser } = useContext(UserContext);
  return (
    <RegisterContainer>
      <div className="containerLogoAndBtnReturn">
        <FcBusinessContact className="logoIcon" style={{width:"100%", height:"100%"}} />
        <button className="returnBtn" onClick={() => navigate("/login")}>
        
          Voltar
        </button>
      </div>
      <div className="containerForm">
        <div className="ContainerTitleForm">
          <h3>Crie sua conta</h3>
          <span>Rapido e grátis, vamos nessa</span>
        </div>
        <form onSubmit={handleSubmit(registerUser)}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            placeholder="Digite aqui seu nome"
            type="text"
            {...register("name")}
          />
          {<p>{errors.name?.message}</p>}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Digite aqui seu email"
            type="text"
            {...register("email")}
          />
          {<p> {errors.email?.message}</p>}
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("password")}
          />
          {<p>{errors.password?.message}</p>}
          <label htmlFor="passwordConfirm">Confirmar Senha</label>
          <input
            id="passwordConfirm"
            placeholder="Confirme aqui sua senha"
            type="password"
            {...register("passwordConfirm")}
          />
          {<p>{errors.passwordConfirm?.message}</p>}
          <label htmlFor="profileImage">Imagem de Perfil:</label>
          <input
            id="profileImage"
            placeholder="URL da sua imagem"
            type="text"
            {...register("profileImage")}
          />
          {<p>{errors.profileImage?.message}</p>}
          <label htmlFor="phone">Contato</label>
          <input
            id="phone"
            placeholder="Opção de contato"
            type="text"
            {...register("phone")}
          />
          {<p>{errors.phone?.message}</p>}
         
          <button className="btnRegister">Cadastrar</button>
        </form>
      </div>
    </RegisterContainer>
  );
};
