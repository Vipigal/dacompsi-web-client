import Container from "../components/Container";
import fotoSobreDa from "../assets/images/image_14.svg";
import bannerPicture from "../assets/images/banner.png";
import AvatarBox from "../components/AvatarBox";
import collaboration from "../assets/images/collaboration.svg";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import BannerCarousel from "../components/BannerCarousel";
import { Carousel } from "@mantine/carousel";
import { IconPencil } from "@tabler/icons-react";
import ModalCadastroPost from "../components/ModalCadastroPost";

const COLLABORATION_PIC_RAZAO = 1.725;
let collaboration_pic_height = 100;

const Home = () => {
  const mobile = useMediaQuery(`(max-width: ${em(750)})`);
  collaboration_pic_height = mobile ? 100 : 250;

  //com isso conseguimos usar informacoes do usuario caso esteja logado
  const { user } = useContext(AuthContext);

  const canUpdate = () => {
    return user?.userType === "ADMIN";
  };

  const [openedModalBanner, setOpenedModalBanner] = useState(false);
  const [openedModalSobre, setOpenedModalSobre] = useState(false);
  const [openedModalGestao, setOpenedModalGestao] = useState(false);
  const [openedModalTicket, setOpenedModalTicket] = useState(false);

  return (
    <Container className="gap-10">
      <div className="h-60 bg-gray-500 relative mx-10 text-white">
        <BannerCarousel className="relative">
          <Carousel.Slide className="w-full">
            <img src={bannerPicture} alt="banner" className="w-full h-full" />
            {canUpdate() && (
              <IconPencil
                color="orange"
                className="absolute top-1 right-5 cursor-pointer hover:scale-125"
                onClick={() => setOpenedModalBanner(true)}
              />
            )}
          </Carousel.Slide>
        </BannerCarousel>
      </div>

      <div
        className="mx-10 flex flex-col md:flex-row p-5 items-center justify-center gap-6 md:gap-48"
        id="da"
      >
        <div className="flex flex-col gap-16 max-w-lg ">
          <span className="font-bold self-center text-[38px] text-center flex items-center justify-center gap-2">
            O QUE É O D.A.?
            {canUpdate() && (
              <IconPencil
                color="orange"
                className="cursor-pointer hover:scale-125 "
                onClick={() => setOpenedModalSobre(true)}
              />
            )}
          </span>
          <span>
            O Diretório Acadêmico de Ciência da Computação e Sistemas de
            Informação da UFMG (DACompSI) é a entidade estudantil que representa
            os estudantes de graduação e pós graduação em Ciência da Computação
            e Sistemas de informação. Coordenado por uma diretoria constituída
            (e eleita) por alunos dos cursos relacionados, tem como alguns de
            seus objetivos:
          </span>
          <ul className="list-disc flex flex-col gap-2">
            <li>
              Representar os interesses do corpo discente (alunos) perante os
              órgãos do DCC (Colegiados e Câmara);
            </li>
            <li>Promover atividades integradoras entre os alunos;</li>
            <li>
              Incentivar práticas de aprimoramento do conhecimento dos
              estudantes;
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <img src={fotoSobreDa} />
          <a className="flex flex-col gap-4" href="/quemsomos">
            <button className="rounded-full bg-red-dacompsi hover:bg-red-900 text-white w-[140px] py-1 self-center">
              SAIBA MAIS
            </button>
          </a>
        </div>
      </div>

      <div
        className="bg-gradient-to-b from-red-dacompsi to-dark-red-dacompsi h-[800px]"
        id="gestao"
      >
        <div className="flex flex-col gap-5 text-white px-16 pt-10 justify-center items-center">
          <span className="font-bold mt-6 md:text-[38px] text-2xl text-center text-white flex items-center justify-center gap-2">
            Conheça nossa gestão
            {canUpdate() && (
              <IconPencil
                color="orange"
                className="cursor-pointer hover:scale-125 "
                onClick={() => setOpenedModalGestao(true)}
              />
            )}
          </span>
          <span className="text-sm sm:text-base">
            Esses são os membros dos Colegiados de Ciência da Computação e
            Sistemas da Informação, isto é, a ponte entre os estudantes e os
            docentes do DCC e ICEX.
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:mt-10 self-center gap-x-10 sm:gap-x-20">
            <AvatarBox name="Chorão" />
            <AvatarBox name="Black Alien" />
            <AvatarBox name="Marcos" />
            <AvatarBox name="Felipe" />
            <AvatarBox name="João" />
            <AvatarBox name="Jorge" />
          </div>
        </div>
      </div>

      <div
        className="h-[550px] md:mx-40 p-10 flex flex-col md:flex-row justify-center md:gap-48 gap-12 items-center"
        id="ajuda"
      >
        <div className="flex flex-col gap-16 max-w-[558px] items-center">
          <span className="font-bold md:text-[38px] text-2xl text-center flex justify-center items-center">
            Peça ajuda a um Representante
            {canUpdate() && (
              <IconPencil
                color="orange"
                className="cursor-pointer hover:scale-125 "
                onClick={() => setOpenedModalTicket(true)}
              />
            )}
          </span>
          <span className="w-[300px] md:min-w-[550px]">
            Ocorreu um problema com sua matrícula? Precisa de orientação para
            tomar uma decisão importante? Não esquenta! Nós do DACompSI estamos
            aqui para te ajudar. Entre em contato com nossos representantes
            discentes e explique o seu caso, estaremos mobilizados para te
            atender o mais rápido possível.
          </span>

          <Link to="/help">
            <button className="rounded-full bg-red-dacompsi hover:bg-red-900 text-white w-[240px] py-2 self-center ">
              PEDIR AJUDA
            </button>
          </Link>
        </div>

        <img
          src={collaboration}
          width={collaboration_pic_height * COLLABORATION_PIC_RAZAO}
          height={collaboration_pic_height}
        />
      </div>
      <ModalCadastroPost
        onClose={() => setOpenedModalBanner(false)}
        opened={openedModalBanner}
        title="Editar Banner"
        variant="BANNER"
      />
      <ModalCadastroPost
        onClose={() => setOpenedModalGestao(false)}
        opened={openedModalGestao}
        title="Editar Seção sobre a Gestão"
      />
      <ModalCadastroPost
        onClose={() => setOpenedModalSobre(false)}
        opened={openedModalSobre}
        title="Editar Seção sobre o D.A."
      />
      <ModalCadastroPost
        onClose={() => setOpenedModalTicket(false)}
        opened={openedModalTicket}
        title="Editar Seção de Ticket"
      />
    </Container>
  );
};

export default Home;
