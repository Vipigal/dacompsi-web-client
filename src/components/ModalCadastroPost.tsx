import { FileInput, Modal, TextInput, Textarea } from "@mantine/core";
import { IconCheck, IconFile, IconX } from "@tabler/icons-react";
import { useState } from "react";
import Button from "./Button";
import { api } from "../utils/api";
import { showNotification } from "@mantine/notifications";

interface IModalProps {
  opened: boolean;
  onClose: () => void;
  title: string;
  variant?: "BANNER" | "DEFAULT";
}

export default function ModalCadastroPost({
  opened,
  onClose,
  title,
  variant,
}: IModalProps) {
  const [fileValue, setFileValue] = useState<File | null>(null);
  const [descricaoValue, setDescricaoValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [subtitleValue, setSubtitleValue] = useState("");

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const formData = new FormData();
    if (fileValue) {
      formData.append("image", fileValue);
    }
    formData.append("title", titleValue);
    formData.append("subtitle", subtitleValue);
    formData.append("description", descricaoValue);

    try {
      const res = await api.post("/users/post", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 200) {
        showNotification({
          title: "Sucesso",
          message: "Postagem criada com sucesso",
          color: "green",
          icon: <IconCheck />,
        });
      } else {
        showNotification({
          title: "Erro ao criar postagem",
          message: res.data,
          color: "red",
          icon: <IconX />,
        });
      }
    } catch (error) {
      showNotification({
        title: "Erro ao criar postagem",
        message: (error as Error).message,
        color: "red",
        icon: <IconX />,
      });
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<span className="font-bold text-xl text-black ">{title}</span>}
      centered
      size={"80%"}
      closeOnClickOutside
    >
      <div className="flex flex-col gap-5 w-full">
        <TextInput
          label="Título"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          placeholder={
            variant === "BANNER"
              ? "Dê um título à postagem"
              : "Dê um título à essa seção"
          }
          required
        />
        <TextInput
          label="Sub-Título"
          value={subtitleValue}
          onChange={(e) => setSubtitleValue(e.target.value)}
          placeholder={
            variant === "BANNER"
              ? "Dê um subtítulo à postagem"
              : "Dê um subtítulo à essa seção"
          }
        />
        <FileInput
          label="Enviar Imagem"
          description={
            variant === "BANNER"
              ? "Imagem nova de destaque do banner - Envie em dimensões apropriadas (1784 x 240)"
              : "Imagem do Post"
          }
          placeholder="Envie seu arquivo"
          multiple={false}
          value={fileValue}
          accept="image/png,image/jpeg,image/jpg"
          onChange={setFileValue}
          leftSection={<IconFile />}
          required
        />

        <Textarea
          label="Adicionar descrição"
          value={descricaoValue}
          onChange={(e) => setDescricaoValue(e.target.value)}
          placeholder={
            variant === "BANNER"
              ? "Adicione um texto para aparecer por cima da imagem do banner"
              : "Adicione um texto para descrever a seção"
          }
        />

        <div className="w-full flex gap-2">
          <Button variant="light" className="w-full" onClick={onClose}>
            CANCELAR
          </Button>
          <Button
            variant="default"
            className="w-full"
            onClick={(e) => handleSubmit(e)}
          >
            ENVIAR
          </Button>
        </div>
      </div>
    </Modal>
  );
}
