import Container from "../components/Container";
import React from "react";
import { Link } from 'react-router-dom';
import "../assets/css/tickets.css" 

const Tickets = () => {
  return (
    
    <Container className="gap-10">
      
      <div className="mx-10 mt-10">
        <span className="text-xl font-bold">Meus Tickets</span>
      </div>

      <div className="mx-10 mt-5 mb-12">
      
        <table className="w-full table-spacing">
          
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Status</th>
              <th>Data de Realização</th>
            </tr>
          </thead>
          
          <tbody>
            <tr className="bg-gray-300 h-10 cell-spacing">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          
          <tbody>
            <tr className="bg-gray-300 h-10 cell-spacing">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>

          <tbody>
            <tr className="bg-gray-300 h-10 cell-spacing">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>

          <tbody>
            <tr className="bg-gray-300 h-10 cell-spacing">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>

        </table>
      
      </div>

    </Container>
  );
};

export default Tickets;
