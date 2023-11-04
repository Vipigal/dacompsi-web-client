import Container from "../components/Container";
import { LogoDacompsiSizes } from "../utils/LogoSizes";
import logo_dacompsi from "../assets/dacompsi_logo_branca.png";
import { useEffect, useState } from "react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { Link, useNavigate } from "react-router-dom";
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
	const [errorSenha, setErrorSenha] = useState<string | null>(null);

  if (import.meta.env.PROD) {
    disableReactDevTools();
  }

	const navigate = useNavigate()

	const handleSubmit = async (e:React.FormEvent<HTMLFormElement> )=>{
		e.preventDefault();

		const body = {
			email: formFields.login,
			senha: formFields.password
		}
		console.log(`${import.meta.env.API_URL}/users/login`)


		try{
			
			const loginRes = await fetch(`http://localhost:3030/api/users/login`, {method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(body)})
			const loginResJson = await loginRes.json();
			console.log('res', loginResJson, loginRes.status, loginResJson.status)
			
			if(loginRes.status === 200){
				console.log('ok')
				navigate('/')
			}else{
				setErrorSenha(loginResJson);
			}
		}catch(e){
			setErrorSenha('Ocorreu um erro misterioso. Por favor, tente novamente mais tarde')
		}
		
	}

	useEffect(()=>{
		setErrorSenha('')
	},[formFields])


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
			onSubmit={(e)=>handleSubmit(e)}
			className="bg-gray-complementary flex flex-col gap-10 items-center justify-center max-w-xl pb-28 px-5 pt-32 self-center justify-self-center min-h-min rounded-3xl shadow-xl">
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
					required
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
					required
          className="w-full"
          type="password"
					error={errorSenha ? errorSenha : false}
        />
        <Button className="w-full rounded-md" variant="default" type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
