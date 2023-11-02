import Container from "../components/Container";
import fotoSobreDa from "../assets/images/image_14.svg";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import AvatarBox from "../components/AvatarBox";
import collaboration from "../assets/images/collaboration.svg";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';

const COLLABORATION_PIC_RAZAO = 1.725;
let collaboration_pic_height = 100;

const Home = () => {

  const mobile = useMediaQuery(`(max-width: ${em(750)})`);
  collaboration_pic_height = mobile ? 100 : 250;
  
  return (

    <Container className="gap-10">

      <div className="h-60 bg-gray-500 flex items-center justify-between mx-10 text-white">
        <IconChevronLeft color="black" className="mx-10" />
        BANNER VAI AQUI
        <IconChevronRight color="black" className="mx-10" />
      </div>

      <div className="mx-10 flex flex-col md:flex-row p-5 items-center justify-center gap-6 md:gap-48" id="da" >
        <div className="flex flex-col gap-16 max-w-lg ">
          <span className="font-bold self-center text-[38px] text-center">
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
          <button className="rounded-full bg-red-dacompsi hover:bg-red-900 text-white w-[140px] py-1 self-center">
            SAIBA MAIS
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-b from-red-dacompsi to-dark-red-dacompsi h-[800px]" id="gestao">
        <div className="flex flex-col gap-5 text-white px-16 pt-10 justify-center items-center">
          <span className="font-bold mt-6 md:text-[38px] text-2xl text-center">
            Conheça nossa gestão
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
        id="ajuda">

        <div className="flex flex-col gap-16 max-w-[558px] items-center">
          <span className="font-bold md:text-[38px] text-2xl text-center">
            Peça ajuda a um Representante
          </span>
          <span className="w-[300px] md:min-w-[550px]">
            Ocorreu um problema com sua matrícula? Precisa de orientação para
            tomar uma decisão? Sem problema! Nós do DACompSI estamos aqui para
            te ajudar! Entre em contato com nossos representantes discentes o
            mais rápido possível e explique o seu caso! Estaremos mobilizados
            para te ajudar.
          </span>

          <Link to="/help">
          <button className="rounded-full bg-red-dacompsi hover:bg-red-900 text-white w-[240px] py-2 self-center ">
            PEDIR AJUDA
          </button>
          </Link>
        
        </div>

        <img src={collaboration} width={collaboration_pic_height * COLLABORATION_PIC_RAZAO} height={collaboration_pic_height}/>
      
      </div>

    </Container>

  );

};

export default Home;
