import Container from "../components/Container";
import { LogoDacompsiSizes } from "../utils/LogoSizes";
import logo_dacompsi from "../assets/dacompsi_logo_branca.png";
import { useEffect, useState } from "react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { Link } from "react-router-dom";
import { TextInput } from "@mantine/core";
import Button from "../components/Button";

interface CadastroForm {
  login: string;
  userName: string;
  contactNumber?: string;
  password: string;
}

const initialFormFieldsCadastro: CadastroForm = {
  login: "",
  contactNumber: "",
  userName: "",
  password: "",
};

const Cadastro = () => {
  const [formFields, setFormFields] = useState(initialFormFieldsCadastro);

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
            <span className="text-black text-5xl font-bold">Inscreva-se</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Já possui uma conta?</span>
            <Link to="/login">
              <span className="text-red-dacompsi">Entrar</span>
            </Link>
          </div>
        </div>
        <TextInput
          label="Email"
          placeholder="Insira seu Email atual"
          value={formFields.login}
          onChange={(e) =>
            setFormFields((prev) => ({ ...prev, login: e.target.value }))
          }
          className="w-full"
        />
        <div className="flex gap-3 w-full">
          <TextInput
            label="Nome de Usuário"
            placeholder="Insira seu nome de Usuário"
            value={formFields.login}
            onChange={(e) =>
              setFormFields((prev) => ({ ...prev, userName: e.target.value }))
            }
            className="w-full"
          />
          <TextInput
            label="Número de contato"
            placeholder="Insira seu Número"
            value={formFields.login}
            onChange={(e) =>
              setFormFields((prev) => ({
                ...prev,
                contactNumber: e.target.value,
              }))
            }
            className="w-full"
          />
        </div>
        <TextInput
          label="Senha"
          placeholder="Crie uma senha nova"
          value={formFields.password}
          onChange={(e) =>
            setFormFields((prev) => ({ ...prev, password: e.target.value }))
          }
          className="w-full"
          type="password"
        />
        <Button className="w-full rounded-md" variant="default">
          Cadastrar
        </Button>
      </div>
    </Container>
  );
};

export default Cadastro;
