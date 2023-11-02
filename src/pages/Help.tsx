import React from 'react';
import Container from "../components/Container";
import  "../assets/css/help.css";



const Help = () => {

    return (

        <Container className="flex flex-col gap-10 p-10">
            
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">

                    <div className="flex flex-col gap-2 w-full md:w-1/2">
                        <span className="font-bold text-[38px] mb-4">Mande um ticket</span>

                        <p className="textAreaTitles">Nome</p>
                        <input className="border p-2 mb-4 rounded-md"/>
                        
                        <p>Título</p>
                        <input className="border p-2 mb-4 rounded-md"/>
                        
                        <p>Assunto</p>
                        <select className="border p-2 mb-4 rounded-md">
                        <option value=""></option> 
                        <option>Acadêmico</option> 
                        <option>Infraestrutura</option> 
                        <option>Auxílio Financeiro</option> 
                        <option>Denúncias</option> 
                        </select>
                        
                        <p>Conte sua história</p>
                        <textarea className="border p-2 rounded-mdh-[200px] mb-4 notResizeTextArea"></textarea>
                        
                        <button className="rounded-full bg-red-dacompsi hover:bg-red-900 text-white w-full mt-4 py-2"> Concluir </button>
                    
                    </div>

                    <div className="flex flex-col gap-6 w-full md:w-1/2 items-center">
                        <span className="font-bold text-[38px] mb-4">O que é a representação discente?</span>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                </div>


        </Container>
        
    );

};

export default Help;
