import Container from "../components/Container";
import fotoSobreDa from "../assets/image_14.svg";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const Home = () => {
  return (
    <Container className="gap-10">
      <div className="h-60 bg-gray-500 flex items-center justify-between mx-10 text-white">
        <IconChevronLeft color="black" className="mx-10" />
        BANNER VAI AQUI
        <IconChevronRight color="black" className="mx-10" />
      </div>

      <div className="mx-10 flex items-center justify-center gap-48">
        <div className="flex flex-col gap-16 max-w-lg">
          <span className="font-bold self-center text-[38px]">
            O QUE É O D.A.?
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
            <li className="">
              Representar os interesses do corpo discente perante os órgãos do
              DCC (Colegiados e Câmara);
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
          <button className="rounded-full bg-red-dacompsi hover:bg-red-900 text-white w-[140px] py-1 self-center">
            SAIBA MAIS
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-b from-red-dacompsi to-dark-red-dacompsi h-[850px]">
        <div className="flex flex-col gap-3 text-white px-16">
          <span className="font-bold  text-[38px]">Conheça nossa gestão</span>
          <span>
            Esses são os membros dos Colegiados de Ciência da Computação e
            Sistemas da Informação, isto é, a ponte entre os estudantes e os
            docentes do DCC e ICEX.
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Home;
