import { LoginContainer } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
// import logo from "../../Assets/Logo.png";
// FcBusinessContact
import { FcBusinessContact } from 'react-icons/fc';
import { useContext } from "react";
import { iLogin, iUserContext, UserContext } from "../../Contexts/UserContext";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Campo obrigatório!")
    .email("Digite um email que possua um cadastro!"),
  password: yup.string().required("Campo Obrigatório!"),
});
export const Login = () => {
  const { loginUser } = useContext<iUserContext>(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  return (
    <>
      <LoginContainer>
        <div className="containerLogo">
          <FcBusinessContact className="logoIcon" style={{width:"100%", height:"100%"}} />
        </div>

        <div className="containerFormLogin">
          <div className="ContainerTitleFormLogin">
            <h3>Login</h3>
          </div>
          <form onSubmit={handleSubmit(loginUser)}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Digite aqui seu email"
              type="text"
              {...register("email")}
            />
            {<p>{errors.email?.message}</p>}
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              placeholder="Digite aqui sua senha"
              type="password"
              {...register("password")}
            />
            {<p>{errors.password?.message}</p>}
            <button className="btnLogin">Entrar</button>
            <p className="ancoraLinkRegister">Ainda não possui uma conta?</p>
          </form>
          <div className="containerBtnRedirectRegister">
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="btnForRegister"
            >
              Cadastre-se
            </button>
          </div>
        </div>
      </LoginContainer>
    </>
  );
};
