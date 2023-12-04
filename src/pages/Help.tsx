import React, { useState } from 'react';
import Container from "../components/Container";
import { api } from "../utils/api"; // Import your API utility
import { showNotification } from "@mantine/notifications";
import "../assets/css/help.css";
import { IconCheck, IconCurrencyReal, IconX } from "@tabler/icons-react";


const Help = () => {
    const [nome, setNome] = useState('');
    const [titulo, setTitulo] = useState('');
    const [assunto, setAssunto] = useState('');
    const [historia, setHistoria] = useState('');

    const handleSubmit = async () => {
        try {
            const data = {
                nome,
                titulo,
                assunto,
                historia,
            };
            const res = await api.post('/tickets', data, { withCredentials: true }); 
            if (res.status === 200) {
                showNotification({
                    title: "Sucesso",
                    message: "Ticket criado com sucesso.",
                    color: "green",
                });
            } else {
                showNotification({
                    title: "Erro",
                    message: "Houve um problema ao criar o ticket.",
                    color: "red",
                });
            }
        } catch (error) {
            showNotification({
                title: "Erro misterioso ocorreu",
                message: (error as Error).message,
                color: "red",
                icon: <IconX />,
            });
        }
    };

    return (
        <Container className="flex flex-col gap-10 p-10">

            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">

                <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <span className="font-bold text-[38px] mb-4">Mande um ticket</span>

                    <p className="textAreaTitles">Nome</p>
                    <input 
                        className="border p-2 mb-4 rounded-md"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    
                    <p>Título</p>
                    <input 
                        className="border p-2 mb-4 rounded-md"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    
                    <p>Assunto</p>
                    <select 
                        className="border p-2 mb-4 rounded-md"
                        value={assunto}
                        onChange={(e) => setAssunto(e.target.value)}
                    >
                    <option value=""></option> 
                    <option>Acadêmico</option> 
                    <option>Infraestrutura</option> 
                    <option>Auxílio Financeiro</option> 
                    <option>Denúncias</option> 
                    </select>
                    
                    <p>Conte sua história</p>
                    <textarea 
                        className="border p-2 rounded-mdh-[200px] mb-4 notResizeTextArea"
                        value={historia}
                        onChange={(e) => setHistoria(e.target.value)}
                    />

                    <button 
                        className="rounded-full bg-red-dacompsi hover:bg-red-900 text-white w-full mt-4 py-2"
                        onClick={handleSubmit}
                        > 
                        Concluir 
                    </button>

                </div>

                <div className="flex flex-col gap-6 w-full md:w-1/2 items-center">
                    <span className="font-bold text-[38px] mb-4">O que é a representação discente?</span>
                    <p>
                    A representação discente é uma peça essencial no cenário acadêmico, envolvendo a eleição de representantes pelos estudantes para advogar por seus interesses perante as instâncias administrativas da instituição. Esses representantes desempenham um papel crucial ao transmitir as preocupações dos estudantes, participar de debates sobre políticas educacionais e promover eventos que enriqueçam a vivência acadêmica. Em um diretório acadêmico, a representação discente focaliza especificamente nas necessidades dos estudantes do curso ou faculdade, contribuindo não apenas para o diálogo formal, mas também para a construção de um ambiente educacional mais inclusivo e participativo.
                    </p>
                </div>

            </div>

        </Container>
    );
};

export default Help;
