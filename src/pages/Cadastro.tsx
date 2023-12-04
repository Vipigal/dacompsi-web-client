import Button from "../components/Button";
import Container from "../components/Container";
import logo_dacompsi from "../assets/images/dacompsi_logo_branca.png";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { LogoDacompsiSizes } from "../utils/LogoSizes";
import { Loader, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";

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
  const [errorLogin, setErrorLogin] = useState("");
  const [loading, setLoading] = useState(false);

  if (import.meta.env.PROD) {
    disableReactDevTools();
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      email: formFields.login,
      contactNumber: formFields.contactNumber,
      name: formFields.userName,
      password: formFields.password,
      userType: "ALUNO",
      // userType: "ADMIN",
    };

    try {
      const cadastroRes = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(payload),
        }
      );
      const cadastroResJson = await cadastroRes.json();
      console.log("res", cadastroResJson, cadastroRes.status);
      if (cadastroRes.status === 200) {
        console.error("Cadastro deu certo!");
        window.location.assign("/login");
      } else {
        setErrorLogin(cadastroResJson);
        console.error("Erro durante cadastro");
      }
    } catch (e) {
      console.log(e);
      setErrorLogin(
        "Ocorreu um erro misterioso. Por favor, tente novamente mais tarde"
      );
    }
    setLoading(false);
  };

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
        onSubmit={handleSubmit}
        className="bg-gray-complementary flex flex-col gap-10 items-center justify-center max-w-xl pb-28 px-5 pt-32 self-center justify-self-center min-h-min rounded-3xl shadow-xl"
      >
        {errorLogin && (
          <div className="bg-red-300 border border-red-dacompsi text-center p-5 rounded-md w-full flex items-center justify-center relative">
            <IconX
              className="absolute top-1 right-1 cursor-pointer"
              onClick={() => setErrorLogin("")}
              size={20}
            />

            {errorLogin}
          </div>
        )}
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
          required
        />
        <div className="flex gap-3 w-full">
          <TextInput
            label="Nome de Usuário"
            placeholder="Insira seu nome de Usuário"
            value={formFields.userName}
            onChange={(e) =>
              setFormFields((prev) => ({ ...prev, userName: e.target.value }))
            }
            className="w-full"
            required
          />
          <TextInput
            label="Número de contato"
            placeholder="Insira seu Número"
            value={formFields.contactNumber}
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
          required
        />

        {loading ? (
          <Loader color="red" />
        ) : (
          <Button className="w-full rounded-md" variant="default" type="submit">
            Cadastrar
          </Button>
        )}
      </form>
    </Container>
  );
};

export default Cadastro;
