import { Divider, Modal, NumberInput } from "@mantine/core";
import { IconCheck, IconCurrencyReal, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import Button from "./Button";
import { api } from "../utils/api";
import { showNotification } from "@mantine/notifications";

interface StoreProductCardProps {
  id: number;
  name: string;
  image: string | null;
  price: number;
  originalPrice?: number;
  amount: number;
  description: string | null;
}

const StoreProductCard: React.FC<StoreProductCardProps> = ({
  name,
  image,
  price,
  amount,
  description,
}) => {
  // const discountPercentage = originalPrice
  //   ? Math.round(((originalPrice - price) / originalPrice) * 100)
  //   : 0;
  //UTILIZADO NO FUTURO - POR ENQUANTO VENDA APENAS POR DESEJO DE COMPRA

  const [openedDetailModal, setOpenedDetailModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(1);
  const isProductAvailable = amount !== 0;

  const handleWishProduct = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const data = {
        productName: name,
        amount: selectedAmount || 1,
      };
      console.log(data);
      const res = await api.post("/orders", data, { withCredentials: true });
      if (res.status === 200) {
        showNotification({
          title: "Sucesso",
          message: "Interesse no Produto registrado com sucesso",
          color: "green",
          icon: <IconCheck />,
        });
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
      showNotification({
        title: "Erro",
        message: (e as Error).message,
        color: "red",
        icon: <IconX />,
      });
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:bg-gray-200 p-2 border">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-32 h-32 mx-auto object-cover"
        />
      ) : (
        <IconCurrencyReal className="w-32 h-32 mx-auto" />
      )}
      <div className="p-4" onClick={() => setOpenedDetailModal(true)}>
        <h5 className="text-lg font-bold text-black">{name}</h5>
        <div className="flex items-center my-2">
          {/* <span className="text-sm text-gray-500">{discountPercentage}%</span> */}
          {/* <span className="text-sm line-through text-gray-500 ml-2">
            R${originalPrice?.toFixed(2)}
          </span> */}
          {!isProductAvailable ? (
            <span className="text-md font-bold text-[#666]">
              Produto fora de estoque!
            </span>
          ) : (
            <span className="text-lg font-bold text-[#666]">
              R${price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
      <Modal
        opened={openedDetailModal}
        onClose={() => setOpenedDetailModal(false)}
        centered
        size={`60%`}
        closeOnClickOutside={true}
        title={<span className="font-bold text-xl text-black ">{name}</span>}
      >
        <div className="flex justify-between px-10 gap-5">
          {image ? (
            <img src={image} alt={name} className="w-32 h-32  object-cover" />
          ) : (
            <IconCurrencyReal className="w-32 h-32 mx-auto" />
          )}
          <Divider orientation="vertical" color="black" />
          <div className="flex flex-col gap-5">
            <div>
              <span className="font-bold text-lg">Descrição:</span>{" "}
              <span>{description}</span>
            </div>
            <div>
              <span className="font-bold text-lg">Disponibilidade:</span>{" "}
              <span>
                {isProductAvailable
                  ? amount
                  : "Indisponível (Mas você pode registrar interesse neste produto para ser incluido na loja mais rápido!)"}
              </span>
            </div>
            <div className="self-end flex gap-2 items-center">
              <NumberInput
                label="Quantidade"
                placeholder="Número de itens"
                min={0}
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(Number(e))}
              />
              <Button
                variant="default"
                className="self-end py-[5px]"
                onClick={(e) =>
                  isProductAvailable
                    ? console.log("SEM COMPRA AINDA AMIGAO")
                    : handleWishProduct(e)
                }
              >
                {isProductAvailable ? "COMPRAR" : "TENHO INTERESSE"}
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StoreProductCard;
