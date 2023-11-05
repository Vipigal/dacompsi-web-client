import { useEffect, useState } from "react";
import Container from "../components/Container";
import { useAuth } from "../utils/useAuth";
import { api } from "../utils/api";

export default function MeuPerfil() {
  const auth = useAuth();
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (auth.user) {
      // await api.get()
    }
  }, [auth]);
  return (
    <Container className="flex">
      <hr />
    </Container>
  );
}
