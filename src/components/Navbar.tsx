import React, { useState, useEffect } from 'react';
import { IconUserCircle } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import logo_dacompsi from "../assets/images/dacompsi_logo_branca.png";
import '../assets/css/menu.css';

const RAZAO_LOGO = 0.565;
const LOGO_HEIGHT = 150;

export const Navbar = () => {

    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

    const toggleSidePanel = () => {
        setIsSidePanelOpen(!isSidePanelOpen);
    };

    useEffect(() => {
        const handleClosePanel = (e: MouseEvent) => {
            if (e.target instanceof Element) {
                if (e.target.closest('.side-panel') || e.target.closest('.hamburger')) {
                    return;
                }
            }
            setIsSidePanelOpen(false);
        };
        document.addEventListener('click', handleClosePanel);
        return () => {
            document.removeEventListener('click', handleClosePanel);
        };
    }, []);
    

    return (

        <nav className="bg-red-dacompsi w-full flex items-center justify-between p-3 pb-3 pr-12 pl-12 h-full">

            <button className="rounded-full bg-red-dacompsi hover:bg-red-900 text-white mt-4 py-2">
                <FaBars
                    size={24}
                    onClick={toggleSidePanel}
                    className="hamburger"
                />
            </button>

            <div className="flex items-center">
                <Link to="/home">
                    <img
                        src={logo_dacompsi}
                        alt="logo dacompsi"
                        width={RAZAO_LOGO * LOGO_HEIGHT}
                        height={LOGO_HEIGHT}
                        className="sm:ml-20"
                    />
                </Link>
            </div>


            <div className="flex gap-10 justify-end items-center h-full">
                
                <a href="#da" className="h-full hover:border-b hover:border-b-white flex items-center justify-center">
                    <span className="text-black hover:text-white transition-all ease-in-out duration-300 hover:scale-105">
                        Sobre o D.A.
                    </span>
                </a>
                
                <a href="#gestao" className="h-full hover:border-b hover:border-b-white flex items-center justify-center">
                    <span className="text-black hover:text-white transition-all ease-in-out duration-300 hover:scale-105">
                        Gestão
                    </span>
                </a>

                <a href="#ajuda" className="h-full hover:border-b hover:border-b-white flex items-center justify-center">
                    <span className="text-black hover:text-white transition-all ease-in-out duration-300 hover:scale-105">
                        Peça Ajuda
                    </span>
                </a>
                
                <Link
                    to={"/login"}
                    className="h-full flex items-center justify-center hover:scale-105">
                    <IconUserCircle color="black" size={"32px"} />
                </Link>

            </div>

            {isSidePanelOpen && (
                <div className="side-panel-container">
                    <div className="side-panel">
                    <Link to="/home" onClick={toggleSidePanel}>Home</Link>
                    <Link to="/eventos" onClick={toggleSidePanel}>Eventos</Link>
                    <Link to="/quemsomos" onClick={toggleSidePanel}>Quem Somos</Link>
                    <Link to="/gestao" onClick={toggleSidePanel}>Gestão</Link>
                    <Link to="/tickets" onClick={toggleSidePanel}>Tickets Representativos</Link>
                    <Link to="/lojas" onClick={toggleSidePanel}>Lojas</Link>
                    </div>
                </div>
            )}

        </nav>

    );

};
