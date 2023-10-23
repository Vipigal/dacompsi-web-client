import Container from "../components/Container";
import { LogoDacompsiSizes } from "../utils/LogoSizes";
import logo_dacompsi from "../assets/dacompsi_logo_branca.png";
import { useEffect, useState } from "react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { Link } from "react-router-dom";
import { TextInput } from "@mantine/core";
import Button from "../components/Button";

interface LoginForm {
  login: string;
  password: string;
}

const initialFormFieldsLogin: LoginForm = {
  login: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(initialFormFieldsLogin);

  useEffect(() => {
    console.log(formFields);
  }, [formFields]);

  if (import.meta.env.PROD) {
    disableReactDevTools();
  }

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
      <div className="bg-gray-complementary flex flex-col gap-10 items-center justify-center max-w-xl pb-28 px-5 pt-32 self-center justify-self-center min-h-min rounded-3xl shadow-xl">
        <div className="flex gap-5">
          <div className="flex flex-col justify-center items-center">
            <span className="text-black">
              Bem vindo ao Diretório Acadêmico CompSI
            </span>
            <span className="text-black text-5xl font-bold">Entrar</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Não possui uma conta?</span>
            <span className="text-red-dacompsi">Inscreva-se</span>
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
        <Button className="w-full rounded-md" variant="default">
          Login
        </Button>
      </div>
    </Container>
  );
};

export default Login;
