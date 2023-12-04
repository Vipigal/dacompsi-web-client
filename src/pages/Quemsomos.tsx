import React from 'react';
import "../assets/css/quemsomos.css"

const QuemSomos = () => {

  const missao = `Nosso compromisso é fortalecer a experiência acadêmica dos estudantes, promovendo representatividade, diálogo e colaboração. Buscamos não apenas ser a voz dos estudantes, mas também criar um ambiente inclusivo, dinâmico e enriquecedor, contribuindo para o desenvolvimento integral de cada membro da comunidade acadêmica.`
  // `Quem sabe me responde, quem não sabe advinha`;
  
  const historia = `Fundado com a visão de unir e ajudar estudantes, o nosso diretório acadêmico tem uma história rica e comprometida. Desde 1950 temos trabalhado incansavelmente para representar os interesses dos estudantes, promover eventos significativos e construir uma comunidade acadêmica vibrante. Ao longo dos anos, enfrentamos desafios, celebramos conquistas e evoluímos para atender às crescentes demandas da nossa comunidade.`
  // `Quem nasceu primeiro, o ovo ou a galinha?`;
  
  const time = `A força por trás do nosso sucesso reside em nossa equipe dedicada e diversificada. Juntos, trabalhamos para criar um ambiente onde a colaboração floresce e as ideias inovadoras ganham vida impulsionando o nosso diretório acadêmico e tornando a jornada acadêmica mais enriquecedora para todos.`
  // `Yeah yeah có có có`;

  return (
    <div className="mx-10 flex flex-col md:flex-row p-5 justify-center gap-6 md:gap-48" id="da">
        <div className="container mx-auto p-8 pr-2 align-self-start">
            <h1 className="text-3xl font-bold text-center mb-6">Quem Somos</h1>
            <section className="mb-8">
                <h2 className="text-2xl text-black font-semibold mb-4">Missao</h2>
                <p className="text-lg">{missao}</p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl text-black font-semibold mb-4">Historia</h2>
                <p className="text-lg">{historia}</p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl text-black font-semibold mb-4">Time</h2>
                <p className="text-lg">{time}</p>
            </section>
        </div>
        <div className="container mx-auto p-8 pr-2 align-self-start" style={{ marginTop: 0 }}>
            <h1 className="text-3xl font-bold text-center mb-6">Sobre o DA</h1>
            <p className='text-lg'>
                O Diretório Acadêmico de Ciência da Computação e Sistemas de
                Informação da UFMG (DACompSI) é a entidade estudantil que representa
                os estudantes de graduação e pós graduação em Ciência da Computação
                e Sistemas de informação. Coordenado por uma diretoria constituída
                (e eleita) por alunos dos cursos relacionados, tem como alguns de
                seus objetivos:
            </p>
            <ul className="list-disc flex flex-col gap-2 mt-4">
                <li  className='text-lg'>
                    Representar os interesses do corpo discente (alunos) perante os órgãos do DCC (Colegiados e Câmara);
                </li>
                <li  className='text-lg'>
                    Promover atividades integradoras entre os alunos;
                </li>
                <li className='text-lg'>
                    Incentivar práticas de aprimoramento do conhecimento dos estudantes;
                </li>
            </ul>
        </div>
    </div>
  );
};

export default QuemSomos;
