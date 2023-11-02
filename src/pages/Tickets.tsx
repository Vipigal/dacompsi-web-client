import Container from "../components/Container";
import React from "react";
import { Link } from 'react-router-dom';

const Tickets = () => {
  return (
    <Container className="gap-10">
      <div className="bg-red-dacompsi text-white p-5 flex justify-between">
        <div className="flex gap-5">
          <span>🍔</span>  {/* Representing your menu icon */}
          <span>DA COMP SI</span>
        </div>
        <div className="flex gap-5">
          <span>📸</span>  {/* Representing your Instagram icon */}
          <span>📧</span>  {/* Representing your Email icon */}
          <span>👤</span>  {/* Representing your Profile/User icon */}
        </div>
      </div>
      
      <div className="mx-10 mt-10">
        <span className="text-xl font-bold">Meus Tickets</span>
      </div>
      
      <div className="mx-10 mt-5">
        <table className="w-full">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Status</th>
              <th>Data de Realização</th>
            </tr>
          </thead>
          <tbody>
            {/* Here, we would typically map over the array of tickets and create a row for each ticket */}
            <tr className="bg-gray-300 h-10">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="bg-gray-300 h-10">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="bg-gray-300 h-10">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-between bg-red-dacompsi text-white mt-10 p-5">
        <div>
          <span>DA COMP SI</span>
          <div className="text-sm">Nos siga nas Redes Sociais!</div>
        </div>
        <div>
          <span>Entre em contato</span>
          <div className="text-sm">dacompsi@gmail.com</div>
          <div className="text-sm">(31)9848-4958</div>
          <div className="text-sm">Ou passe pela salinha do DA.</div>
        </div>
      </div>
      
      <div className="text-center p-5 text-sm">
        Todo o conteúdo deste site é de responsabilidade única e exclusiva do DAcompsi. Nenhum outro corpo discente se responsabiliza ou guarda relação direta com qualquer conteúdo aqui presente.
      </div>
    </Container>
  );
};

export default Tickets;
