import { Avatar, Menu } from "@mantine/core";
import { IconLogout, IconStar, IconUser, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";

interface ISessionDisplay {
  name?: string;
}

function SessionDisplay({ name }: ISessionDisplay) {
  const navigate = useNavigate();
  const handleLogout = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      e.preventDefault();
      const res = await api.post("/users/logout", null, {
        withCredentials: true,
      });
      if (res.status === 200) {
        navigate(0);
      } else {
        showNotification({
          title: "Erro",
          message:
            "Um problema ocorreu ao deslogar do sistema. Favor tentar novamente.",
          color: "red",
          icon: <IconX />,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getIniciais = (nome: string | undefined) => {
    if (!nome) return null;
    const inicial_1 = name?.split(" ")?.[0]?.[0];
    const inicial_2 = name?.split(" ")?.[1]?.[0];
    return `${inicial_1 || ""}${inicial_2 || ""}`;
  };

  const [opened, setOpened] = useState(false);
  return (
    <Menu opened={opened} onChange={setOpened} shadow="lg" withArrow>
      <Menu.Target>
        <Avatar size={40} color="white" className="cursor-pointer">
          {name && getIniciais(name) ? getIniciais(name) : <IconStar />}
        </Avatar>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconUser color="black" />}
          onClick={() => navigate("meuPerfil")}
        >
          <span>Meu Pefil</span>
        </Menu.Item>
        <Menu.Item
          leftSection={<IconLogout color="red" />}
          onClick={(e) => handleLogout(e)}
        >
          <span>Logout</span>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default SessionDisplay;
