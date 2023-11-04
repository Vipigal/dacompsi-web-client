import Container from "../components/Container";
import { LogoDacompsiSizes } from "../utils/LogoSizes";
import logo_dacompsi from "../assets/images/dacompsi_logo_branca.png";
import { useContext, useEffect, useState } from "react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { Link, useNavigate } from "react-router-dom";
import { TextInput } from "@mantine/core";
import Button from "../components/Button";
import { IconX } from "@tabler/icons-react";
import { AuthContext } from "../contexts/AuthContext";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { User } from "../interfaces/User";

interface LoginForm {
  login: string;
  password: string;
}

const initialFormFieldsLogin: LoginForm = {
  login: "",
  password: "",
};

export interface JwtPayloadUser extends JwtPayload {
  user?: User;
}

const Login = () => {
  const [formFields, setFormFields] = useState(initialFormFieldsLogin);
  const [errorLogin, setErrorLogin] = useState("");

  const { setAuthenticated, setUser } = useContext(AuthContext);

  if (import.meta.env.PROD) {
    disableReactDevTools();
  }

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      email: formFields.login,
      senha: formFields.password,
    };
    console.log(`${import.meta.env.VITE_API_URL}/users/login`);

    try {
      const loginRes = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(body),
        }
      );
      const loginResJson = await loginRes.json();
      console.log("res", loginResJson, loginRes.status);

      if (loginRes.status === 200) {
        setAuthenticated(true);
        const decodedJwT = jwtDecode(loginResJson) as JwtPayloadUser;
        setUser?.(decodedJwT.user as User);
        navigate("/");
      } else {
        setErrorLogin("Usuário e/ou Senha inválidos");
      }
    } catch (e) {
      console.log(e);
      setErrorLogin(
        "Ocorreu um erro misterioso. Por favor, tente novamente mais tarde"
      );
    }
  };

  useEffect(() => {
    setErrorLogin("");
  }, [formFields]);

  return (
    <Container className="h-screen bg-gradient-to-r from-red-dacompsi from-50% to-white to-50% justify-center">
      <div className="absolute top-5 left-10">
        <Link to="/">
          <img
            src={logo_dacompsi}
            alt="logo dacompsi"
            width={LogoDacompsiSizes.width.medium}
            height={LogoDacompsiSizes.height.medium}
          />
        </Link>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-gray-complementary flex flex-col gap-10 items-center justify-center max-w-xl pb-28 px-5 pt-32 self-center justify-self-center min-h-min rounded-3xl shadow-xl relative"
      >
        {errorLogin && (
          <div className="bg-red-400 border border-red-600 p-5 absolute top-10 rounded-md w-11/12 flex items-center justify-center">
            <IconX
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setErrorLogin("")}
              size={20}
            />

            {errorLogin}
          </div>
        )}
        <div className="flex gap-5">
          <div className="flex flex-col justify-center items-center">
            <span className="text-black">
              Bem vindo ao Diretório Acadêmico CompSI
            </span>
            <span className="text-black text-5xl font-bold">Entrar</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Não possui uma conta?</span>
            <Link to="/cadastro">
              <span className="text-red-dacompsi">Inscreva-se</span>
            </Link>
          </div>
        </div>
        <TextInput
          label="Nome de Usuário ou Email"
          placeholder="Entre com seu Nome de Usuário ou Email"
          value={formFields.login}
          onChange={(e) =>
            setFormFields((prev) => ({ ...prev, login: e.target.value }))
          }
          className="w-full"
        />
        <TextInput
          label="Senha"
          placeholder="Entre com sua Senha"
          value={formFields.password}
          onChange={(e) =>
            setFormFields((prev) => ({ ...prev, password: e.target.value }))
          }
          className="w-full"
          type="password"
        />
        <Button className="w-full rounded-md" variant="default" type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
